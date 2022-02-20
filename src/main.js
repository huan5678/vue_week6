import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { vfmPlugin } from 'vue-final-modal';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);

const pinia = createPinia();

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.use(pinia);
app.use(router);
app.use(vfmPlugin);
app.mount('#app');
