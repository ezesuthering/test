import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '@/store/modules/menu/index'
import VuexPersistence from 'vuex-persist'

//Setting Vuex Persistance. This feature allow the app to host the global store in the localSorage
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu: Menu
  },
  plugins: [vuexLocal.plugin]
})
