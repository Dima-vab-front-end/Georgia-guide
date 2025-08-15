<template>
  <h1 class="pb-3 pt-3">Многодневные маршруты по Грузии</h1>
  <section
    v-for="(item, index) of root.listOfRoutes"
    class="mt-3 car-route-container">
    <h2>{{ index + 1 }}. {{ item.title }}</h2>
    <img class="main-image" :src="item.image" />

    <h4 class="mt-2">
      <a target="_blank" :href="item.navigationRoute">
        Открыть маршрут в новигаторе
      </a>
    </h4>
    <section v-if="item.additionalContent?.length" class="mt-3">
      <div v-for="additionalContent of item.additionalContent">
        <h5>
          {{ additionalContent.title }}
        </h5>
        <iframe
          class="video"
          :src="additionalContent.youtubeLink"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen></iframe>
      </div>
    </section>
    <section v-if="item.children?.length" class="mt-5">
      <h4>Места на маршруте</h4>
      <div class="accordion" id="accordionExample">
        <div v-for="(child, index) of item.children" class="accordion-item">
          <div class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#' + child.id"
              aria-expanded="true"
              :aria-controls="child.id">
              <h5>
                {{ index + 1 }}.
                {{ child.title }}
              </h5>
            </button>
          </div>
          <div
            :id="child.id"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <div>{{ child.description }}</div>

              <img class="route-image" :src="child.image" />

              <section v-if="child.additionalContent?.length" class="mt-4">
                <div v-for="additionalContent of child.additionalContent">
                  <h5>
                    {{ additionalContent.title }}
                  </h5>
                  <a
                    v-if="additionalContent.link"
                    target="_blank"
                    :href="additionalContent.link"
                    >Открыть сылку</a
                  >
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
  </section>
</template>
<script setup lang="ts">
import carRoutes from './car-routes';

const root = carRoutes();
</script>

<style lang="scss" src="./car-routes.scss"></style>
