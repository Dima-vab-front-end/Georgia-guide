<template>
  <h1 class="pb-3 pt-3">Магазины</h1>

  <h5>
    В Грузии очень большие разницы в ценах в зависимости от магазина и момента,
    почти все товары бывают на скидках и тогда они стоят в 2-3 раза дешевле чем
    обычно, поэтому имеет смысл смотреть скидки
  </h5>
  <h3>
    <a target="_blank" href="https://t.me/skidki_ge">
      Группа в телеграмме со скидками
    </a>
  </h3>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import shops from './shops';
const root = shops();
</script>
