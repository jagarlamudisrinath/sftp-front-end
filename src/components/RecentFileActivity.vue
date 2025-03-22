
<template>
  <v-card class="file-activity-card">
    <v-card-title class="d-flex align-center pb-4">
      Recent File Activity
    </v-card-title>
    <v-card-text>
      <v-table class="file-table" density="comfortable">
        <thead>
          <tr>
            <th class="text-subtitle-2 font-weight-bold">File Name</th>
            <th class="text-subtitle-2 font-weight-bold">
              <div class="d-flex align-center">
                Vendor
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-filter"
                      variant="text"
                      density="comfortable"
                      size="small"
                      v-bind="props"
                    ></v-btn>
                  </template>
                  <v-list density="compact" class="filter-menu">
                    <v-list-item
                      v-for="vendor in vendors"
                      :key="vendor"
                      :value="vendor"
                      @click="toggleVendorFilter(vendor)"
                    >
                      <v-list-item-title>
                        <v-checkbox
                          v-model="selectedVendors"
                          :value="vendor"
                          :label="vendor"
                          hide-details
                          density="compact"
                        ></v-checkbox>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </th>
            <th class="text-subtitle-2 font-weight-bold">
              <div class="d-flex align-center">
                Status
                <v-menu>
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon="mdi-filter"
                      variant="text"
                      density="comfortable"
                      size="small"
                      v-bind="props"
                    ></v-btn>
                  </template>
                  <v-list density="compact" class="filter-menu">
                    <v-list-item
                      v-for="status in statuses"
                      :key="status"
                      :value="status"
                      @click="toggleStatusFilter(status)"
                    >
                      <v-list-item-title>
                        <v-checkbox
                          v-model="selectedStatuses"
                          :value="status"
                          :label="status"
                          hide-details
                          density="compact"
                        ></v-checkbox>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </th>
            <th class="text-subtitle-2 font-weight-bold">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in filteredActivity" :key="item.id" class="file-row">
            <td>{{ item.fileName }}</td>
            <td>{{ item.vendor }}</td>
            <td>
              <v-chip
                :color="item.status === 'Decrypted' ? 'success' : 'info'"
                size="small"
                variant="flat"
                class="font-weight-medium"
              >
                {{ item.status }}
              </v-chip>
            </td>
            <td>{{ item.time }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const vendors = ['Vendor 1', 'Vendor 2', 'Vendor 3', 'Vendor 4', 'Vendor 5']
const statuses = ['Decrypted', 'Processing']

const selectedVendors = ref([])
const selectedStatuses = ref([])

const activityData = ref([
  { id: 1, fileName: 'file_1.pgp', vendor: 'Vendor 1', status: 'Decrypted', time: new Date().toLocaleString() },
  { id: 2, fileName: 'file_2.pgp', vendor: 'Vendor 2', status: 'Processing', time: new Date().toLocaleString() },
  { id: 3, fileName: 'file_3.pgp', vendor: 'Vendor 3', status: 'Decrypted', time: new Date().toLocaleString() },
  { id: 4, fileName: 'file_4.pgp', vendor: 'Vendor 4', status: 'Processing', time: new Date().toLocaleString() },
  { id: 5, fileName: 'file_5.pgp', vendor: 'Vendor 5', status: 'Decrypted', time: new Date().toLocaleString() }
])

const toggleVendorFilter = (vendor) => {
  const index = selectedVendors.value.indexOf(vendor)
  if (index === -1) {
    selectedVendors.value.push(vendor)
  } else {
    selectedVendors.value.splice(index, 1)
  }
}

const toggleStatusFilter = (status) => {
  const index = selectedStatuses.value.indexOf(status)
  if (index === -1) {
    selectedStatuses.value.push(status)
  } else {
    selectedStatuses.value.splice(index, 1)
  }
}

const filteredActivity = computed(() => {
  let filtered = activityData.value
  
  if (selectedVendors.value.length > 0) {
    filtered = filtered.filter(item => selectedVendors.value.includes(item.vendor))
  }
  
  if (selectedStatuses.value.length > 0) {
    filtered = filtered.filter(item => selectedStatuses.value.includes(item.status))
  }
  
  return filtered
})
</script>

<style scoped>
.file-activity-card {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.file-table {
  border: none;
  border-radius: 8px;
  overflow: hidden;
}

.file-row {
  transition: background-color 0.2s ease;
}

.file-row:hover {
  background-color: rgba(25, 118, 210, 0.05);
}

.filter-menu {
  min-width: 200px;
  border-radius: 8px;
  overflow: hidden;
}

.v-card-title {
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1.5rem;
}

:deep(.v-table) {
  box-shadow: none !important;
}

:deep(.v-table th) {
  font-weight: 600 !important;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

:deep(.v-chip) {
  font-weight: 600 !important;
}
</style>
