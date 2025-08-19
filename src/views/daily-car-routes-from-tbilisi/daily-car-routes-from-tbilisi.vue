<template>
  <h1 class="pb-3 pt-3">Однодневные маршруты из Тбилиси</h1>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import dailyCarRoutesFromTbilisi from './daily-car-routes-from-tbilisi';
const root = dailyCarRoutesFromTbilisi();
</script>
