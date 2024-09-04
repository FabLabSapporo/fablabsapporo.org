# fablabsapporo.org
Website &amp; Content for fablabsapporo.org

# Running VitePress

Dev
`npm run docs:dev`

Build
`npm run docs:build`

Preview Build
`npm run docs:preview`

# Features

- Multi-lingual
- Light/Dark Images
- Image Resizing

## Configuration

`config.js` lives in `.vitepress/config.js`


```js
export default {
  lang: 'en-US',
  title: 'VitePress Test',
  description: 'Vite & Vue powered static site generator.',
  base: '/',
  cleanUrls: true,
  outDir: './dist' // distribtion folder
}

```


## Git


## To do:

- Install & Test: [vite-imagetools](https://www.npmjs.com/package/vite-imagetools)