import { createRouter, createWebHistory } from 'vue-router'
import HomeLayouts from '@/layouts/HomeLayouts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayouts,
      children:[
        {
          path:'/',
          name:'inicio',
          component:()=> import('@/views/Client/HomeView.vue')
        },
        {
          path:'/productos',
          name:'productos',
          component:()=>import('@/views/Client/MenuView.vue')
        },
        {
          path:'/contacto',
          name:'contacto',
          component:()=>import('@/views/Client/ContactView.vue')
        },
        {
          path:'/detalle/:id',
          name:'detalle',
          component:()=>import('@/views/Client/DetalleView.vue')
        },
        {
          path:'/carrito',
          name:'carrito',
          component:()=>import('@/views/Client/CartView.vue')
        }
      ]
    }
  ]
})

export default router
