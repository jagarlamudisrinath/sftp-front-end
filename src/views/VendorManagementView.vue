<template>
  <v-card>
    <v-layout>
      <!-- Removed AppBar and NavigationBar -->
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12">
              <VendorType />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import VendorType from '@/components/VendorType.vue';

const drawer = ref(true);
</script>
