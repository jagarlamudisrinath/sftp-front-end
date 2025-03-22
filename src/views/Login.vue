
<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="elevation-12 pa-6">
          <v-card-title class="text-h5 text-center mb-4">
            Welcome Back
          </v-card-title>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="username"
              label="Username"
              prepend-icon="mdi-account"
              variant="outlined"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock"
              :type="showPassword ? 'text' : 'password'"
              variant="outlined"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-btn
              color="primary"
              size="large"
              block
              type="submit"
              class="mt-4"
            >
              Sign In
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const showPassword = ref(false)

const login = () => {
  // TODO: Implement actual login logic
  router.push('/browser')
}
</script>
