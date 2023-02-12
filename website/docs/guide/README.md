# Installation

## NPM

	npm install vue-grid-layout-v3 --save

## Yarn

    yarn add vue-grid-layout-v3


Import the library

```javascript
    import VueGridLayout from 'vue-grid-layout-v3';
```

Add to other Vue components

 ```javascript
    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
    // ... data, methods, mounted (), etc.
    }

```

## browser

Include the browser-ready bundle (download from [releases](https://github.com/merfais/vue-grid-layout-v3/releases)) in your page. The components will be automatically available.

```html
    <script src="vue-grid-layout-v3.umd.min.js"></script>
```

