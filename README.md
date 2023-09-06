# Nuxt Deadline Funnel

[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt 3 Module to integrate Deadline Funnel to your Nuxt app

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Quick Setup

1. Add `nuxt-deadlinefunnel` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-deadlinefunnel

# Using yarn
yarn add --dev nuxt-deadlinefunnel

# Using npm
npm install --save-dev nuxt-deadlinefunnel
```

2. Add `nuxt-deadlinefunnel` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-deadlinefunnel'
  ]
})
```

Then, you must add the userIdHash to the module options:

```js
deadlinefunnel: {
  userIdHash: 'ey...'
}
```

And Voilà!

You can easily check that the script is correctly injected by inspecting your page on your browser. Note that nothing is injected if the key is missing!

## Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/my-module

[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/my-module

[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/my-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
