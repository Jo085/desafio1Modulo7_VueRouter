import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },    
    {
      path: '/productos',
      name: 'productos',
      component: () => import(/* webpackChunkName: "productos" */ '../views/ProductosView.vue'),
        props: () => {
          return {
            nombre: "Desayunos",
            descripcion: "Contamos con desayunos nutritivos y deliciosos",
            precio: 2000,
            cantidad: "Para dos personas",
          }
        },        
      },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue')
    },      
  ]
});

export default router
