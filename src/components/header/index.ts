import { defineAsyncComponent } from 'vue';

export const AppHeader = defineAsyncComponent(() => import('./header.vue'));
