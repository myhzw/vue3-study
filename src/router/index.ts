import {createRouter,createWebHistory} from 'vue-router'
import example from '@/views/example/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/example',
      component:example
    }
  ]
})

export default router