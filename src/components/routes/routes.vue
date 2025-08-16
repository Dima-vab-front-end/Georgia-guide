<template>
  <div class="accordion d-md-none" id="routesAccordion">
    <div
      v-for="(item, index) of root.props.routes"
      :key="item.id || index"
      class="accordion-item mt-5 mb-3 car-route-container">
      <h2 class="accordion-header" :id="'route-heading-' + index">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#route-collapse-' + index"
          aria-expanded="false"
          :aria-controls="'route-collapse-' + index">
          <div>
            <h2 class="m-0 pb-1">{{ index + 1 }}. {{ item.title }}</h2>
            <div><img class="accordion-header-image" :src="item.image" /></div>
          </div>
        </button>
      </h2>

      <div
        :id="'route-collapse-' + index"
        class="accordion-collapse collapse"
        :aria-labelledby="'route-heading-' + index"
        data-bs-parent="#routesAccordion">
        <route-body-component
          class="accordion-body"
          :route="item"
          :index="index"></route-body-component>
      </div>
    </div>
  </div>

  <div class="d-none d-md-block">
    <section
      v-for="(item, index) of root.props.routes"
      :key="'desktop-' + (item.id || index)"
      class="mt-5 pb-5 car-route-container">
      <div class="mb-2">
        <h2 class="m-0 pb-1">{{ index + 1 }}. {{ item.title }}</h2>
        <div><img class="accordion-header-image" :src="item.image" /></div>
      </div>

      <div class="px-1">
        <route-body-component
          :route="item"
          :index="index"></route-body-component>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import routesD from './routes';
import { definedProps, definedEmits } from './routes-props-emit';
import { RouteBodyComponent } from '../route';

const props = defineProps({ ...definedProps });

const emits = defineEmits(definedEmits);

const root = routesD(emits, props);
</script>

<style lang="scss" src="./routes.scss"></style>
