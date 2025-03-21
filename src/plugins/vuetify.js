import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  // Add your Vuetify options here
  icons: {
    iconfont: 'mdi',
  },
});

export default vuetify;
