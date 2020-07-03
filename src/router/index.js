import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from '@/ui/views/Details'

Vue.use(VueRouter)

//App routes
const routes = [
  {
    path: '/details/:id',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
