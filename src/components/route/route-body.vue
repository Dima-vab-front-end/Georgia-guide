<template>
  <h4 class="mt-2">
    <a
      v-if="root.props.route.navigationRoute"
      target="_blank"
      :href="root.props.route.navigationRoute">
      Открыть маршрут в новигаторе
    </a>
  </h4>
  <div>{{ root.props.route.description }}</div>

  <section v-if="root.props.route.additionalContent?.length" class="mt-3">
    <div
      v-for="(additionalContent, acIndex) of root.props.route.additionalContent"
      :key="'d-' + acIndex">
      <h5>{{ additionalContent.title }}</h5>
      <a
        v-if="additionalContent.link"
        target="_blank"
        :href="additionalContent.link">
        Открыть ссылку
      </a>
      <iframe
        v-if="additionalContent.youtubeLink"
        class="video"
        :class="{ shorts: additionalContent.isShorts }"
        :src="additionalContent.youtubeLink"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
  </section>

  <section v-if="root.props.route.children?.length" class="mt-5">
    <h4>Места на маршруте</h4>
    <div class="accordion" :id="'accordionExample-d-' + index">
      <div
        v-for="(child, cIndex) of root.props.route.children"
        :key="'d-' + (child.id || cIndex)"
        class="accordion-root.props.route">
        <div class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#d-' + child.id"
            aria-expanded="true"
            :aria-controls="'d-' + child.id">
            <h5 class="m-0">{{ cIndex + 1 }}. {{ child.title }}</h5>
          </button>
        </div>

        <div
          :id="'d-' + child.id"
          class="accordion-collapse collapse"
          :data-bs-parent="'#accordionExample-d-' + index">
          <div class="accordion-body">
            <div>{{ child.description }}</div>

            <img class="route-image" :src="child.image" />

            <section v-if="child.additionalContent?.length" class="mt-4">
              <div
                v-for="(additionalContent, i2) of child.additionalContent"
                :key="'d-' + i2">
                <h5>{{ additionalContent.title }}</h5>
                <a
                  v-if="additionalContent.link"
                  target="_blank"
                  :href="additionalContent.link">
                  Открыть ссылку
                </a>
                <iframe
                  v-if="additionalContent.youtubeLink"
                  class="video"
                  :class="{ shorts: additionalContent.isShorts }"
                  :src="additionalContent.youtubeLink"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen></iframe>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import route from './route-body';
import { definedProps, definedEmits } from './route-body-props-emit';

const props = defineProps({ ...definedProps });

const emits = defineEmits(definedEmits);

const root = route(emits, props);
</script>

<style lang="scss" src="./route-body.scss"></style>
