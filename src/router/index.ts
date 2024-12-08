import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import MainLayout from '../layouts/MainLayout.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: 'task',
        name: 'Task',
        component: () => import('../views/Job.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router