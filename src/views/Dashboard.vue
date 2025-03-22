<template>
  <v-container fluid>
    <FileStatistics />
    <v-row class="mt-4">
      <v-col cols="12" lg="8">
        <RecentFileActivity />
      </v-col>
      <v-col cols="12" lg="4">
        <VendorStatus />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import RecentFileActivity from '../components/RecentFileActivity.vue'
import VendorStatus from '../components/VendorStatus.vue'
import FileStatistics from '../components/FileStatistics.vue'
</script>