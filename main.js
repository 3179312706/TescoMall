import App from './App'
import {myRequest} from './util/api.js'
// #ifndef VUE3
import Vue from 'vue'

Vue.prototype.$myRuquest = myRequest

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
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