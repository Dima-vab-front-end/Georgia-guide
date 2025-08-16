import { defineAsyncComponent } from 'vue';

export const RoutesComponent = defineAsyncComponent(
  () => import('./routes.vue')
);
