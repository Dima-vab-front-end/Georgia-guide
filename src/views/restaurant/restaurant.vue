<template>
  <h1 class="pb-3 pt-3">Пару рестиков и кафешек где нравится</h1>
  <h5>
    *Часть ресторанов в Тбилиси указывает в меню что в конце добавят 15-18%
    сверху и они так и делают, а еще порой не хотят с картами работать
  </h5>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import dishes from './restaurant';
const root = dishes();
</script>
