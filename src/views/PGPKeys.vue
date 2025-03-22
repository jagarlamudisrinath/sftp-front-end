<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="d-flex align-center">
            PGP Key Management
            <v-spacer></v-spacer>
            <v-btn color="primary" prepend-icon="mdi-key-plus" @click="dialog = true">
              Generate New Key
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-card>
              <v-card-text>
                <v-table density="comfortable" class="pgp-key-table">
                  <thead>
                    <tr>
                      <th class="text-left font-weight-bold primary--text">Key ID</th>
                      <th class="text-left font-weight-bold primary--text">User ID</th>
                      <th class="text-left font-weight-bold primary--text">Type</th>
                      <th class="text-left font-weight-bold primary--text">Expiry Date</th>
                      <th class="text-left font-weight-bold primary--text">Status</th>
                      <th class="text-left font-weight-bold primary--text">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="key in pgpKeys" :key="key.id" class="pgp-key-row">
                      <td class="text-body-1">{{ key.keyId }}</td>
                      <td class="text-body-1">{{ key.userId }}</td>
                      <td class="text-body-1">{{ key.type }}</td>
                      <td class="text-body-1">{{ key.expiryDate }}</td>
                      <td>
                        <v-chip
                          :color="key.active ? 'success' : 'warning'"
                          size="small"
                          class="font-weight-medium"
                        >
                          {{ key.active ? 'Active' : 'Expired' }}
                        </v-chip>
                      </td>
                      <td>
                        <v-btn
                          icon="mdi-pencil"
                          variant="text"
                          size="small"
                          color="primary"
                          class="mr-2"
                        ></v-btn>
                        <v-btn
                          icon="mdi-delete"
                          variant="text"
                          size="small"
                          color="error"
                        ></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Generate Key Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Generate PGP Key Pair</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="generateKey">
            <v-select
              v-model="selectedVendor"
              :items="vendors"
              item-title="name"
              item-value="id"
              label="Select Vendor"
              required
            ></v-select>
            <v-text-field
              v-model="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="passphrase"
              label="Passphrase"
              type="password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey" variant="text" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="generateKey">Generate</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- View Key Dialog -->
    <v-dialog v-model="viewDialog" max-width="600px">
      <v-card>
        <v-card-title>{{ viewDialogTitle }}</v-card-title>
        <v-card-text>
          <v-textarea
            v-model="viewDialogContent"
            readonly
            rows="10"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="copyToClipboard">Copy</v-btn>
          <v-btn color="grey" variant="text" @click="viewDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const dialog = ref(false)
const viewDialog = ref(false)
const viewDialogTitle = ref('')
const viewDialogContent = ref('')
const selectedVendor = ref(null)
const email = ref('')
const passphrase = ref('')

// Mock data - replace with actual data from your backend
const vendors = ref([
  { id: 1, name: 'LoanCare' },
  { id: 2, name: 'Mr. Cooper' },
  { id: 3, name: 'ServiMac' }
])

const pgpKeys = ref([
  { id: 1, keyId: '0xA1B2C3D4', userId: 'john.doe@example.com', type: 'RSA-4096', expiryDate: '2024-12-31', active: true },
  { id: 2, keyId: '0xE5F6G7H8', userId: 'jane.smith@example.com', type: 'RSA-2048', expiryDate: '2024-06-30', active: true },
  { id: 3, keyId: '0xI9J0K1L2', userId: 'admin@example.com', type: 'RSA-4096', expiryDate: '2023-12-31', active: false },
  { id: 4, keyId: '0xM3N4O5P6', userId: 'support@example.com', type: 'RSA-4096', expiryDate: '2024-09-30', active: true },
  { id: 5, keyId: '0xQ7R8S9T0', userId: 'dev@example.com', type: 'RSA-2048', expiryDate: '2023-11-30', active: false }
])

const generateKey = async () => {
  // TODO: Implement actual PGP key generation
  // This is where you would call your backend API to generate the keys
  console.log('Generating key for vendor:', selectedVendor.value)
  dialog.value = false
}

const viewKey = (key) => {
  viewDialogTitle.value = 'PGP Key'
  viewDialogContent.value = key
  viewDialog.value = true
}

const viewPassphrase = (passphrase) => {
  viewDialogTitle.value = 'Passphrase'
  viewDialogContent.value = passphrase
  viewDialog.value = true
}

const copyToClipboard = () => {
  navigator.clipboard.writeText(viewDialogContent.value)
}

const deleteKey = (id) => {
  // TODO: Implement key deletion
  console.log('Deleting key:', id)
}
</script>

<style scoped>
.pgp-key-table {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

.pgp-key-table th {
  background-color: #f5f5f5;
  font-size: 1.1em;
  padding: 16px !important;
  border-bottom: 2px solid rgba(0, 0, 0, 0.12) !important;
}

.pgp-key-table td {
  padding: 12px 16px !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
}

.pgp-key-row:hover {
  background-color: #f5f7fa;
}

@media (max-width: 600px) {
  .pgp-key-table th,
  .pgp-key-table td {
    padding: 8px !important;
    font-size: 0.9em;
  }
}
</style>