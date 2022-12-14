import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';

import BaseButton from './components/base/BaseButton.vue';

const app = createApp(App);
app.use(store);
app.component('base-button', BaseButton);
app.mount('#app');
