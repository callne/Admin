import App from './App'
import { router,RouterMount} from './@/pages/router.js'

// #ifndef VUE3
import Vue from 'vue'
import uView from './uni_modules/uview-ui'
Vue.use(uView)
Vue.use(router)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})

RouterMount(app,router,'#app')

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif