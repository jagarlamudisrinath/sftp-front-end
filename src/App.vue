
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(true)
const appTitle = "Lakeview DataGateway"
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="!drawer"
      permanent
      color="primary"
      class="elevation-3"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Lakeview DataGateway"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="drawer = !drawer"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          to="/dashboard"
          value="dashboard"
          rounded="lg"
          class="mb-1"
        />
        
        <v-list-group value="vendor-management">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-key-variant"
              title="Vendor Management"
              rounded="lg"
              class="mb-1"
            />
          </template>
          <v-list-item
            prepend-icon="mdi-file-key"
            title="PGP Keys"
            to="/keys"
            value="keys"
            rounded="lg"
            class="mb-1"
          />
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Vendors"
            to="/vendors"
            value="vendors"
            rounded="lg"
            class="mb-1"
          />
          <v-list-item
            prepend-icon="mdi-tag-multiple"
            title="Vendor Types"
            to="/vendor-types"
            value="vendor-types"
            rounded="lg"
            class="mb-1"
          />
          <v-list-item
            prepend-icon="mdi-folder-multiple"
            title="Landing Zones"
            to="/landing-zones"
            value="landing-zones"
            rounded="lg"
            class="mb-1"
          />
        </v-list-group>
        <v-list-item
          prepend-icon="mdi-cog"
          title="Settings"
          to="/settings"
          value="settings"
          rounded="lg"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      color="surface"
      class="elevation-1"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>{{ appTitle }}</v-app-bar-title>
      <template v-slot:append>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-refresh"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main class="main-background">
      <v-container fluid class="pa-6">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>
<style>
.main-background {
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  min-height: 100vh;
}

.v-navigation-drawer {
  border-right: none !important;
}

:deep(.v-list-item--active) {
  background: rgba(255, 255, 255, 0.9) !important;
}
</style>
