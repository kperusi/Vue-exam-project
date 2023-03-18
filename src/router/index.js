import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'
import SingleRepoView from '../components/SingleRepoView.vue'
// import RepoList from '../components/RepoList.vue'
import About from '../components/AboutView.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
     
    },
    {
      path: '/about',
      name: 'about',
      component:About,
      children:[{
        path:'/about/:name',
        component:SingleRepoView
      }]
    },
    {path:'/:pathMatch(.*)*',component:()=> import('../components/ErrorPage.vue')}
  ]
})

export default router
      // component: () => import('../components/AboutView.vue'),
        // component:()=>import('../components/SingleRepoView.vue')
