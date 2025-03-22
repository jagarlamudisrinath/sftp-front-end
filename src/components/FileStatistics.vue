<template>
  <v-row>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="primary">mdi-file-upload</v-icon>
          <div class="text-h5 mt-2">15</div>
          <div class="text-subtitle-1">Files Recived Today</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="error">mdi-alert</v-icon>
          <div class="text-h5 mt-2">8</div>
          <div class="text-subtitle-1">Decryption Failures</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="info">mdi-truck-delivery</v-icon>
          <div class="text-h5 mt-2">12</div>
          <div class="text-subtitle-1">Files deliverd Today</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="success">mdi-lock-check</v-icon>
          <div class="text-h5 mt-2">45</div>
          <div class="text-subtitle-1">Files Decrypted</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="warning">mdi-lock-alert</v-icon>
          <div class="text-h5 mt-2">3</div>
          <div class="text-subtitle-1">Encryption Failures</div>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" lg="2">
      <v-card class="mx-auto stats-card" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="48" color="purple">mdi-lock</v-icon>
          <div class="text-h5 mt-2">32</div>
          <div class="text-subtitle-1">Files Encrypted Today</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>