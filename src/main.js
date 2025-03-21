import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'; // Import the Vuetify plugin

const app = createApp(App)

app.use(router)
app.use(vuetify); // Use the Vuetify plugin

app.mount('#app')
