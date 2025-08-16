<template>
  <h1 class="pb-3 pt-3">Многодневные маршруты по Грузии</h1>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import carRoutes from './long-car-routes';
const root = carRoutes();
</script>
