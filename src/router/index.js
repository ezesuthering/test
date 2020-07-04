import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/ui/views/Content'

Vue.use(VueRouter)

//App routes
const routes = [
  {
    name: 'content',
    path: '/content/:id',
    component: Content
  }
]

const router = new VueRouter({
  routes
})

export default router
