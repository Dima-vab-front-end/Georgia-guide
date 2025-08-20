<template>
  <h1 class="pb-3 pt-3">Блюда и продукты</h1>

  <h5>Перечень блюд и товаров спецефических для Грузии, которые рекомендую</h5>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import dishes from './dishes';
const root = dishes();
</script>
