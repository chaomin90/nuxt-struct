import { resolve } from 'path';
import extendsRouters from './router/extendsRouters.js';
import loaderConfig from './build/loaderConfig';

// https://go.nuxtjs.dev/config-build

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // 全局样式: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/sass/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  // 对路由进行扩展
  router: extendsRouters,

  // Build Configuration
  build: {
    // 通过extend可进行配置扩展
    extend(config, { loaders }) {
      
    },

    loaders: loaderConfig,
    // 优化配置，如分包
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 10,
        maxSize: 0,
        minChunks: 2,
        maxAsyncRequests: 8,
        maxInitialRequests: 4,
        cacheGroups: {
          common123: {
            name: 'common123',
            minChunks: 2,
            priority: 20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    }
  },

  // 目录别名
  alias: {
    '@': resolve(__dirname, './assets'),
    '@img': resolve(__dirname, './assets/images'),
    '@page': resolve(__dirname, './pages/')
  },

  // 本地服务
  server: {
    port: 3000,
    host: '127.0.0.1'
  }
}


