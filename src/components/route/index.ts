import { defineAsyncComponent } from 'vue';

export const RouteBodyComponent = defineAsyncComponent(
  () => import('./route-body.vue')
);
