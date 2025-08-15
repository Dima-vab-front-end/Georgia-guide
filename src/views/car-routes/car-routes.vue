<template>
  <h1 class="pb-3 pt-3">Многодневные маршруты по Грузии</h1>

  <div class="accordion" id="routesAccordion">
    <div
      v-for="(item, index) of root.listOfRoutes"
      :key="item.id || index"
      class="accordion-item mt-3 car-route-container">
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
        <div class="accordion-body px-1">
          <h4 class="mt-2">
            <a target="_blank" :href="item.navigationRoute">
              Открыть маршрут в новигаторе
            </a>
          </h4>

          <section v-if="item.additionalContent?.length" class="mt-3">
            <div
              v-for="(additionalContent, acIndex) of item.additionalContent"
              :key="acIndex">
              <h5>{{ additionalContent.title }}</h5>
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
            <div class="accordion" :id="'accordionExample-' + index">
              <div
                v-for="(child, cIndex) of item.children"
                :key="child.id || cIndex"
                class="accordion-item">
                <div class="accordion-header">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + child.id"
                    aria-expanded="true"
                    :aria-controls="child.id">
                    <h5 class="m-0">{{ cIndex + 1 }}. {{ child.title }}</h5>
                  </button>
                </div>

                <div
                  :id="child.id"
                  class="accordion-collapse collapse show"
                  :data-bs-parent="'#accordionExample-' + index">
                  <div class="accordion-body">
                    <div>{{ child.description }}</div>

                    <img class="route-image" :src="child.image" />

                    <section
                      v-if="child.additionalContent?.length"
                      class="mt-4">
                      <div
                        v-for="(
                          additionalContent, i2
                        ) of child.additionalContent"
                        :key="i2">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import carRoutes from './car-routes';
const root = carRoutes();
</script>

<style lang="scss" src="./car-routes.scss"></style>
