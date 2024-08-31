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
          component:()=> import('@/views/HomeView.vue')
        },
        {
          path:'/productos',
          name:'productos',
          component:()=>import('@/views/MenuView.vue')
        },
        {
          path:'/contacto',
          name:'contacto',
          component:()=>import('@/views/ContactView.vue')
        },
        {
          path:'/detalle',
          name:'detalle',
          component:()=>import('@/views/DetalleView.vue')
        },
        {
          path:'/carrito',
          name:'carrito',
          component:()=>import('@/views/CartView.vue')
        },
        {
          path:'/perfil',
          name:'perfil',
          component:()=>import('@/views/ProfileView.vue')
        }
      ]
    },
  ]
})

export default router
