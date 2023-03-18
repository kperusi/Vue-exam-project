import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutView.vue'),
      children:[{
        path:'/about/:name',
        component:()=>import('../components/SingleRepoView.vue')
      }]
    },
    {path:'/:pathMatch(.*)*',component:()=> import('../components/ErrorPage.vue')}
  ]
})

export default router
