<template>
  <h1 class="pb-3 pt-3">Однодневные маршруты из Тбилиси</h1>
  <h3>На случай если едете через РФ в Грузию(1 маршрут, но развернутый)</h3>
  <a
    target="_blank"
    href="https://yandex.com.ge/navi/?ll=44.801355%2C42.193561&mode=routes&rtext=42.662910%2C44.620465~42.531771%2C44.472459~42.492281%2C44.452997~42.470237%2C44.493310~42.163823%2C44.703141~41.788338%2C44.739922&rtt=auto&ruri=~~~~~&z=9.93">
    Места если едете из РФ в Грузию(в Гудаури не заезжайте если мало времени)
  </a>
  <routes-component :routes="root.listOfRoutes"></routes-component>
</template>

<script setup lang="ts">
import { RoutesComponent } from '@src/components/routes';
import dailyCarRoutesFromTbilisi from './daily-car-routes-from-tbilisi';
const root = dailyCarRoutesFromTbilisi();
</script>
