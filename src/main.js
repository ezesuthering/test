import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import _ from 'lodash';    
import { VueHammer } from 'vue2-hammer'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
Vue.config.productionTip = false

//Defining lodash to Vue prototype in read only mode.
Object.defineProperty(Vue.prototype, '$_', { value: _ });

//Wrapper of Hammer.js for Vue
Vue.use(VueHammer)

//Wrapper of Bootstrap for Vue
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
