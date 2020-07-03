import Vue from 'vue'
import Vuex from 'vuex'
import Menu from '@/store/modules/menu/index'
import Topics from '@/store/modules/topics/index'
import Config from '@/store/modules/config/index'
import VuexPersistence from 'vuex-persist'

//Setting Vuex Persistance. This feature allow the app to host the global store in the localSorage
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu: Menu,
    topics: Topics,
    config: Config
  },
  plugins: [vuexLocal.plugin]
})
