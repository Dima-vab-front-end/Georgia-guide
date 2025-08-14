import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import App from './app.vue';
import { setupRouter } from './router/index';
import 'bootstrap';
import 'es6-promise/auto';
// import globalStore, { storeKey, useStore } from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import 'bootstrap/dist/css/bootstrap.css';
// const store = useStore();

const router = setupRouter();

// const app = createApp(App).use(globalStore, storeKey).use(router);

const app = createApp(App).use(router);

const head = createHead();

app.use(head);

app.mount('#app');
