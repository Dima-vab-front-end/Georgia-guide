<template>
  <h1 class="pb-3 pt-3">Маршруты и Места Из Батуми</h1>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import batumi from './batumi';
const root = batumi();
</script>
