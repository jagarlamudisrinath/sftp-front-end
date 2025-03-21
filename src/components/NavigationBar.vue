<template>
    <v-navigation-drawer
      :model-value="drawer"
      @update:model-value="emit('update:drawer', $event)"
      :permanent="!$vuetify.display.mobile"   
      :temporary="$vuetify.display.mobile" 
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
          @click="toggleExpand(item)"
        >
          <template v-slot:prepend>
            <v-icon>{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <!-- Add sub-items if they exist -->
          <v-list v-if="item.children && item.expanded">
            <v-list-item
              v-for="subItem in item.children"
              :key="subItem.title"
              :to="subItem.to"
              link
            >
              <template v-slot:prepend>
                <v-icon>{{ subItem.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ subItem.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  defineProps({ drawer: Boolean });
  const emit = defineEmits(['update:drawer']);
  
  const items = ref([
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
    { 
      title: 'Vendor Management', 
      icon: 'mdi-account-group', 
      to: '/vendor-management',
      expanded: false,
      children: [
        { title: 'Vendor Types', icon: 'mdi-account-plus', to: '/vendor-management/vendor-types' },
        { title: 'Vendors', icon: 'mdi-account-multiple', to: '/vendor-management/vendors' }
      ]
    },
    { title: 'PGP Decryption', icon: 'mdi-key', to: '/pgp-decryption' },
    { title: 'PGP Key Management', icon: 'mdi-key', to: '/pgp-key-management' },
    { title: 'File Monitoring', icon: 'mdi-file-document-box', to: '/file-monitoring' },
    { title: 'Audit Logs', icon: 'mdi-book', to: '/audit-logs' },
  ]);
  
  const toggleExpand = (item) => {
    if (item.children) {
      item.expanded = !item.expanded;
    }
  };
  </script>
