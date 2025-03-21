import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VendorManagementView from '@/views/VendorManagementView.vue'
import PgpDecryptionView from '@/views/PgpDecryptionView.vue'
import PgpKeyManagementView from '@/views/PgpKeyManagementView.vue'
import FileMonitoringView from '@/views/FileMonitoringView.vue'
import AuditLogsView from '@/views/AuditLogsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/vendor-management',
      name: 'vendor-management',
      component: VendorManagementView,
    },
    {
      path: '/pgp-decryption',
      name: 'pgp-decryption',
      component: PgpDecryptionView,
    },
    {
      path: '/pgp-key-management',
      name: 'pgp-key-management',
      component: PgpKeyManagementView,
    },
    {
      path: '/file-monitoring',
      name: 'file-monitoring',
      component: FileMonitoringView,
    },
    {
      path: '/audit-logs',
      name: 'audit-logs',
      component: AuditLogsView,
    },
  ],
})

export default router
