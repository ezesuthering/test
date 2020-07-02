import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueHammer } from 'vue2-hammer'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//Wrapper of Hammer.js for Vue
Vue.use(VueHammer)

//Wrapper of Bootstrap for Vue
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
