<template>
    <div class="vendor-type-container">
        <v-card elevation="2" class="rounded-lg" style="width: 100%;">
            <!-- Toolbar with Search & Create Button -->
            <v-toolbar flat class="pa-3">
                <v-toolbar-title>Vendor Types</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field 
                    v-model="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    dense
                    hide-details
                    class="mr-3"
                ></v-text-field>
                <v-btn color="primary" @click="openCreateDialog" class="text-white">
                    <v-icon left>mdi-plus</v-icon> Create
                </v-btn>
            </v-toolbar>

            <!-- Data Table -->
            <v-data-table 
                :headers="headers" 
                :items="vendorTypes" 
                density="comfortable"
                class="elevation-1 rounded-lg"
                hover
                fixed-header
                :items-per-page="5"
                :search="search"
                show-items-per-page
            >
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{ item.Name }}</td>
                        <td>{{ item.Description }}</td>
                        <td>{{ item.InboundPGPEncryptedStorageAccount }}</td>
                        <td>{{ item.InboundPGPDecryptedStorageAccount }}</td>
                        <td>{{ item.OutboundPGPEncryptedStorageAccount }}</td>
                        <td>{{ item.OutboundPGPDecryptedStorageAccount }}</td>
                        <td class="text-right">
                            <v-btn icon color="primary" @click="openEditDialog(item)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn icon color="red" @click="deleteVendorType(item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>

        <!-- Create/Edit Vendor Type Dialog -->
        <v-dialog v-model="dialogOpen" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">{{ dialogTitle }}</v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.Name" label="Name" outlined dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.Description" label="Description" outlined dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.InboundPGPEncryptedStorageAccount" label="Inbound PGP Encrypted Storage" outlined dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.InboundPGPDecryptedStorageAccount" label="Inbound PGP Decrypted Storage" outlined dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.OutboundPGPEncryptedStorageAccount" label="Outbound PGP Encrypted Storage" outlined dense></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedVendorType.OutboundPGPDecryptedStorageAccount" label="Outbound PGP Decrypted Storage" outlined dense></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="grey darken-1" text @click="dialogOpen = false">Cancel</v-btn>
                    <v-btn color="primary" @click="saveVendorType">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            search: "",
            headers: [
                { title: "Name", key: "Name", align: "start", sortable: true },
                { title: "Description", key: "Description", sortable: true },
                { title: "Inbound PGP Encrypted Storage", key: "InboundPGPEncryptedStorageAccount", sortable: false },
                { title: "Inbound PGP Decrypted Storage", key: "InboundPGPDecryptedStorageAccount", sortable: false },
                { title: "Outbound PGP Encrypted Storage", key: "OutboundPGPEncryptedStorageAccount", sortable: false },
                { title: "Outbound PGP Decrypted Storage", key: "OutboundPGPDecryptedStorageAccount", sortable: false }
            ],
            vendorTypes: [],
            dialogOpen: false,
            dialogTitle: "Create Vendor Type",
            editedVendorType: {}
        };
    },
    methods: {
        async fetchVendorTypes() {
            try {
                const response = await axios.get("http://localhost:7071/api/v1/vendor_types");
                this.vendorTypes = response.data;
            } catch (error) {
                console.error("Error fetching vendor types:", error);
            }
        },

        async saveVendorType() {
            try {
                if (this.editedVendorType.VendorTypeID) {
                    await axios.put(
                        `http://localhost:7071/api/v1/vendor_types/${this.editedVendorType.VendorTypeID}`,
                        this.editedVendorType
                    );
                } else {
                    await axios.post("http://localhost:7071/api/v1/vendor_types", this.editedVendorType);
                }
                this.fetchVendorTypes();
                this.dialogOpen = false;
            } catch (error) {
                console.error("Error saving vendor type:", error);
            }
        },

        openEditDialog(vendorType) {
            this.dialogTitle = "Edit Vendor Type";
            this.editedVendorType = { ...vendorType };
            this.dialogOpen = true;
        },

        openCreateDialog() {
            this.dialogTitle = "Create Vendor Type";
            this.editedVendorType = {
                Name: "",
                Description: "",
                InboundPGPEncryptedStorageAccount: "",
                InboundPGPDecryptedStorageAccount: "",
                OutboundPGPEncryptedStorageAccount: "",
                OutboundPGPDecryptedStorageAccount: ""
            };
            this.dialogOpen = true;
        },

        async deleteVendorType(vendorType) {
            try {
                await axios.delete(`http://localhost:7071/api/v1/vendor_types/${vendorType.VendorTypeID}`);
                this.fetchVendorTypes();
            } catch (error) {
                console.error("Error deleting vendor type:", error);
            }
        }
    },
    mounted() {
        this.fetchVendorTypes();
    }
};
</script>
