import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import BoardList from '../views/board/List.vue'
import BoardDetail from '../views/board/Detail.vue'
import BoardWrite from '../views/board/Write.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/board/list',
    name: 'boardList',
    component: BoardList
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: BoardDetail
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: BoardWrite
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router