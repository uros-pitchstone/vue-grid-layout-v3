<script setup>
import elementResizeDetectorMaker from 'element-resize-detector';
import mitt from 'mitt';
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  reactive,
  watch,
  provide,
  ref,
  unref,
  nextTick,
} from 'vue';
import {
  bottom,
  compact,
  getLayoutItem,
  moveElement,
  validateLayout,
  cloneLayout,
  getAllCollisions,
} from '@/helpers/utils';
import {
  getBreakpointFromWidth,
  getColsFromBreakpoint,
  findOrGenerateResponsiveLayout,
} from '@/helpers/responsiveUtils';
import {
  addWindowEventListener,
  removeWindowEventListener,
} from '@/helpers/DOM';
import GridItem from './GridItem.vue';

const props = defineProps({
  // If true, the container height swells and contracts to fit contents
  autoSize: {
    type: Boolean,
    default: true,
  },
  colNum: {
    type: Number,
    default: 12,
  },
  rowHeight: {
    type: Number,
    default: 150,
  },
  maxRows: {
    type: Number,
    default: Infinity,
  },
  margin: {
    type: Array,
    default() {
      return [10, 10];
    },
  },
  isDraggable: {
    type: Boolean,
    default: true,
  },
  isResizable: {
    type: Boolean,
    default: true,
  },
  isMirrored: {
    type: Boolean,
    default: false,
  },
  isBounded: {
    type: Boolean,
    default: false,
  },
  useCssTransforms: {
    type: Boolean,
    default: true,
  },
  verticalCompact: {
    type: Boolean,
    default: true,
  },
  restoreOnDrag: {
    type: Boolean,
    default: false,
  },
  layout: {
    type: Array,
    required: true,
  },
  responsive: {
    type: Boolean,
    default: false,
  },
  responsiveLayouts: {
    type: Object,
    default() {
      return {};
    },
  },
  transformScale: {
    type: Number,
    default: 1,
  },
  breakpoints: {
    type: Object,
    default() { return { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }; },
  },
  cols: {
    type: Object,
    default() { return { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }; },
  },
  preventCollision: {
    type: Boolean,
    default: false,
  },
  useStyleCursor: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits([
  'update:layout',
  'layout-ready',
  'layout-created',
  'layout-before-mount',
  'layout-mounted',
  'layout-updated',
  'breakpoint-changed',
  'container-resized',
  'item-resize',
  'item-resized',
  'item-move',
  'item-moved',
  'intersection-observe',
  'intersection-unobserve',
]);

const emitter = mitt();
let erd;
let positionsBeforeDrag;

const state = reactive({
  width: null,
  mergedStyle: {},
  lastLayoutLength: 0,
  isDragging: false,
  placeholder: {
    x: 0,
    y: 0,
    w: 0,
    h: 0,
    i: -1,
  },
  layouts: {}, // array to store all layouts from different breakpoints
  lastBreakpoint: null, // store last active breakpoint
  originalLayout: null, // store original Layout
});
const domRef = ref();

provide('emitter', emitter);
provide('gridLayout', reactive({
  margin: props.margin,
  responsive: props.responsive,
  cols: props.cols,
  lastBreakpoint: state.lastBreakpoint,
  colNum: props.colNum,
  rowHeight: props.rowHeight,
  width: state.width,
  maxRows: props.maxRows,
  isDraggable: props.isDraggable,
  isResizable: props.isResizable,
  isBounded: props.isBounded,
  transformScale: props.transformScale,
  useCssTransforms: props.useCssTransforms,
  useStyleCursor: props.useStyleCursor,
  isMirrored: props.isMirrored,
}));

// provide(eventBus, null)
// provide(layout, state)
//   provide() {
//     return {
//       eventBus: null,
//       layout: this
//     }
//   },

function created() {
  // TODO const self = this;
  // self._provided.eventBus = new Vue();
  // self.eventBus = self._provided.eventBus;
  emitter.on('resizeEvent', resizeEvent);
  emitter.on('dragEvent', dragEvent);
  emit('layout-created', props.layout);
}

created();
// TODO// Accessible refernces of functions for removing in beforeDestroy
// function resizeEventHandler(eventType, i, x, y, h, w) {
//   resizeEvent(eventType, i, x, y, h, w);
// };
//
// function dragEventHandler(eventType, i, x, y, h, w) {
//   dragEvent(eventType, i, x, y, h, w);
// };

onBeforeMount(() => {
  emit('layout-before-mount', props.layout);
});

onMounted(async () => {
  emit('layout-mounted', props.layout);
  await nextTick();
  validateLayout(props.layout);

  state.originalLayout = props.layout;
  await nextTick();
  initResponsiveFeatures();

  onWindowResize();


  // self.width = self.$el.offsetWidth;
  addWindowEventListener('resize', onWindowResize);

  compact(props.layout, props.verticalCompact);

  emit('layout-updated', props.layout);
  emit('update:layout', props.layout);

  updateHeight();
  await nextTick();
  erd = elementResizeDetectorMaker({
    strategy: 'scroll', // <- For ultra performance.
    // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
    callOnAdd: false,
  });
  erd.listenTo(unref(domRef), () => {
    onWindowResize();
  });
});

onBeforeUnmount(() => {
  // Remove listeners
  emitter.off('resizeEvent', resizeEvent);
  emitter.off('dragEvent', dragEvent);
  removeWindowEventListener('resize', onWindowResize);
  if (erd && unref(domRef)) {
    erd.uninstall(unref(domRef));
  }
});

watch(() => state.width, async (newval, oldval) => {
  await nextTick();
  // this.$broadcast("updateWidth", state.width);
  emitter.emit('updateWidth', state.width);

  /**
   * If oldval == null is when the width has never been
   * set before. That only occurs when mouting is
   * finished, and onWindowResize has been called and
   * state.width has been changed the first time after it
   * got set to null in the constructor. It is now time
   * to issue layout-ready events as the GridItems have
   * their sizes configured properly.

   * The reason for emitting the layout-ready events on
   * the next tick is to allow for the newly-emitted
   * updateWidth event (above) to have reached the
   * children GridItem-s and had their effect, so we're
   * sure that they have the final size before we emit
   * layout-ready (for this GridLayout) and
   * item-layout-ready (for the GridItem-s).

   * This way any client event handlers can reliably
   * invistigate stable sizes of GridItem-s.
   */
  if (oldval === null) {
    nextTick(() => {
      emit('layout-ready', props.layout);
    });
  }
  updateHeight();
});

watch(() => props.layout, () => {
  layoutUpdate();
});

watch(() => props.colNum, (val) => {
  emitter.emit('setColNum', val);
});

watch(() => props.rowHeight, () => {
  emitter.emit('setRowHeight', props.rowHeight);
});

watch(() => props.isDraggable, () => {
  emitter.emit('setDraggable', props.isDraggable);
});

watch(() => props.isResizable, () => {
  emitter.emit('setResizable', props.isResizable);
});

watch(() => props.isBounded, () => {
  emitter.emit('setBounded', props.isBounded);
});

watch(() => props.transformScale, () => {
  emitter.emit('setTransformScale', props.transformScale);
});

watch(() => props.responsive, () => {
  if (!props.responsive) {
    emit('update:layout', state.originalLayout);
    emitter.emit('setColNum', props.colNum);
  }
  onWindowResize();
});

watch(() => props.maxRows, () => {
  emitter.emit('setMaxRows', props.maxRows);
});

watch(() => props.margin, () => {
  updateHeight();
});

function layoutUpdate() {
  if (props.layout !== undefined && state.originalLayout !== null) {
    if (props.layout.length !== state.originalLayout.length) {
      // console.log("### LAYOUT UPDATE!", props.layout.length, state.originalLayout.length);

      const diff = findDifference(props.layout, state.originalLayout);
      if (diff.length > 0) {
        // console.log(diff);
        if (props.layout.length > state.originalLayout.length) {
          state.originalLayout = state.originalLayout.concat(diff);
        } else {
          state.originalLayout = state.originalLayout.filter(obj => {
            return !diff.some(obj2 => {
              return obj.i === obj2.i;
            });
          });
        }
      }

      state.lastLayoutLength = props.layout.length;
      initResponsiveFeatures();
    }

    compact(props.layout, props.verticalCompact);
    emitter.emit('updateWidth', state.width);
    updateHeight();

    emit('layout-updated', props.layout);
    emit('update:layout', props.layout);
  }
}

function updateHeight() {
  state.mergedStyle = {
    height: containerHeight(),
  };
}

function onWindowResize() {
  if (unref(domRef)) {
    state.width = unref(domRef).offsetWidth;
  }
  emitter.emit('resizeEvent');
}

function containerHeight() {
  if (!props.autoSize) return;
  // console.log("bottom: " + bottom(props.layout))
  // console.log("rowHeight + margins: " + (this.rowHeight + this.margin[1]) + this.margin[1])
  const [, m2] = props.margin;
  return `${bottom(props.layout) * (props.rowHeight + m2) + m2}px`;
}

// TODO
function dragEvent([eventName, id, x, y, h, w] = []) {
  // console.log(eventName + " id=" + id + ", x=" + x + ", y=" + y);
  let l = getLayoutItem(props.layout, id);
  // GetLayoutItem sometimes returns null object
  if (l === undefined || l === null) {
    l = { x: 0, y: 0 };
  }

  if (eventName === 'dragstart' && !props.verticalCompact) {
    positionsBeforeDrag = props.layout.reduce((result, { i, x, y }) => ({
      ...result,
      [i]: { x, y },
    }), {});
  }

  if (eventName === 'dragmove' || eventName === 'dragstart') {
    state.placeholder.i = id;
    state.placeholder.x = l.x;
    state.placeholder.y = l.y;
    state.placeholder.w = w;
    state.placeholder.h = h;
    nextTick(() => {
      state.isDragging = true;
    });
    // this.$broadcast("updateWidth", state.width);
    emitter.emit('updateWidth', state.width);
  } else {
    nextTick(() => {
      state.isDragging = false;
    });
  }

  // Move the element to the dragged location.
  // props.layout = moveElement(props.layout, l, x, y, true, props.preventCollision);
  const newLayout = moveElement(props.layout, l, x, y, true, props.preventCollision);
  emit('update:layout', newLayout);


  if (props.restoreOnDrag) {
    // Do not compact items more than in layout before drag
    // Set moved item as static to avoid to compact it
    l.static = true;
    // compact(props.layout, props.verticalCompact, positionsBeforeDrag);
    compact(newLayout, props.verticalCompact, positionsBeforeDrag);
    l.static = false;
  } else {
    // compact(props.layout, props.verticalCompact);
    compact(newLayout, props.verticalCompact);
  }

  // needed because vue can't detect changes on array element properties
  emitter.emit('compact');
  updateHeight();
  if (eventName === 'dragend') {
    positionsBeforeDrag = undefined;
    // emit('layout-updated', props.layout);
    // emit('update:layout', props.layout);
    emit('layout-updated', newLayout);
    emit('update:layout', newLayout);
  }
}

function resizeEvent([eventName, id, x, y, h, w] = []) {
  let l = getLayoutItem(props.layout, id);
  // GetLayoutItem sometimes return null object
  if (l === undefined || l === null) {
    l = { h: 0, w: 0 };
  }

  let hasCollisions;
  if (props.preventCollision) {
    const collisions = getAllCollisions(props.layout, { ...l, w, h }).filter(
      layoutItem => layoutItem.i !== l.i,
    );
    hasCollisions = collisions.length > 0;

    // If we're colliding, we need adjust the placeholder.
    if (hasCollisions) {
      // adjust w && h to maximum allowed space
      let leastX = Infinity;
      let leastY = Infinity;
      collisions.forEach(layoutItem => {
        if (layoutItem.x > l.x) leastX = Math.min(leastX, layoutItem.x);
        if (layoutItem.y > l.y) leastY = Math.min(leastY, layoutItem.y);
      });

      if (Number.isFinite(leastX)) l.w = leastX - l.x;
      if (Number.isFinite(leastY)) l.h = leastY - l.y;
    }
  }

  if (!hasCollisions) {
    // Set new width and height.
    l.w = w;
    l.h = h;
  }

  if (eventName === 'resizestart' || eventName === 'resizemove') {
    state.placeholder.i = id;
    state.placeholder.x = x;
    state.placeholder.y = y;
    state.placeholder.w = l.w;
    state.placeholder.h = l.h;
    nextTick(() => {
      state.isDragging = true;
    });
    // this.$broadcast("updateWidth", state.width);
    emitter.emit('updateWidth', state.width);
  } else {
    nextTick(() => {
      state.isDragging = false;
    });
  }

  if (props.responsive) {
    responsiveGridLayout();
  }

  compact(props.layout, props.verticalCompact);
  emitter.emit('compact');
  updateHeight();

  if (eventName === 'resizeend') {
    emit('layout-updated', props.layout);
    emit('update:layout', props.layout);
  }
}

// finds or generates new layouts for set breakpoints
function responsiveGridLayout() {
  const newBreakpoint = getBreakpointFromWidth(props.breakpoints, state.width);
  const newCols = getColsFromBreakpoint(newBreakpoint, props.cols);

  // save actual layout in layouts
  if (state.lastBreakpoint != null && !state.layouts[state.lastBreakpoint]) state.layouts[state.lastBreakpoint] = cloneLayout(props.layout);

  // Find or generate a new layout.
  const layout = findOrGenerateResponsiveLayout(
    state.originalLayout,
    state.layouts,
    props.breakpoints,
    newBreakpoint,
    state.lastBreakpoint,
    newCols,
    props.verticalCompact,
  );

  // Store the new layout.
  state.layouts[newBreakpoint] = layout;

  if (state.lastBreakpoint !== newBreakpoint) {
    emit('breakpoint-changed', newBreakpoint, layout);
  }

  // new prop sync
  emit('update:layout', layout);

  state.lastBreakpoint = newBreakpoint;
  emitter.emit('setColNum', getColsFromBreakpoint(newBreakpoint, props.cols));
}

// clear all responsive layouts
function initResponsiveFeatures() {
  // clear layouts
  state.layouts = { ...props.responsiveLayouts };
}

// find difference in layouts
function findDifference(layout, originalLayout) {
  // Find values that are in result1 but not in result2
  const uniqueResultOne = layout.filter((obj) => {
    return !originalLayout.some((obj2) => {
      return obj.i === obj2.i;
    });
  });

  // Find values that are in result2 but not in result1
  const uniqueResultTwo = originalLayout.filter((obj) => {
    return !layout.some((obj2) => {
      return obj.i === obj2.i;
    });
  });

  // Combine the two arrays of unique entries#
  return uniqueResultOne.concat(uniqueResultTwo);
}
</script>
<template>
  <div ref="domRef" class="vue-grid-layout" :style="state.mergedStyle">
    <slot />
    <grid-item
      v-show="state.isDragging"
      class="vue-grid-placeholder"
      :x="state.placeholder.x"
      :y="state.placeholder.y"
      :w="state.placeholder.w"
      :h="state.placeholder.h"
      :i="state.placeholder.i"
    />
  </div>
</template>
<style>
.vue-grid-layout {
  position: relative;
  transition: height 200ms ease;
}
</style>

