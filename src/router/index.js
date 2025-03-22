import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'
import Vendors from '../views/Vendors.vue'
import VendorTypes from '../views/VendorTypes.vue'
import PGPKeys from '../views/PGPKeys.vue'
import Landingzones from '../views/Landingzones.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/settings',
      component: Settings
    },
    {
      path: '/vendors',
      component: Vendors
    },
    {
      path: '/vendor-types',
      component: VendorTypes
    },
    {
      path: '/keys',
      component: PGPKeys
    },
    {
      path: '/landing-zones',
      component: Landingzones
    }
  ]
})

export default router