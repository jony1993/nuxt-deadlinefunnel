import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'


// Module options TypeScript interface definition
export interface ModuleOptions {
   /**
   * Deadline-Funnel User ID Hash
   * @default process.env.DEADLINEFUNNEL_USER_ID_HASH
   * @example 'eyJp....'
   * @type string
   */
   userIdHash: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-deadlinefunnel',
    configKey: 'deadlinefunnel'
  },
  // Default configuration options of the Nuxt module
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Make sure user id hash is set
    if (!options.userIdHash) {
      console.warn('Missing `DEADLINEFUNNEL_USER_ID_HASH` in `.env`')
    }

    // Public runtimeConfig
    nuxt.options.runtimeConfig.public.deadlinefunnel = defu(nuxt.options.runtimeConfig.public.deadlinefunnel, {
      userIdHash: options.userIdHash
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugins/plugin.client'))
  }
})
