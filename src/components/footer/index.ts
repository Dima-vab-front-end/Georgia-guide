import { defineAsyncComponent } from 'vue';

export const AppFooter = defineAsyncComponent(() => import('./footer.vue'));
