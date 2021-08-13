export default {
	extendRoutes(routes, resolve) {
      routes.push({
        name: '/',
        path: '/',
        component: resolve(__dirname, '@page/index/index.vue')
      })
    }
}