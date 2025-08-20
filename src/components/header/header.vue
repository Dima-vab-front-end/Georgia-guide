<template>
  <header class="w-100">
    <!-- <div>
      <h3 class="d-flex p-3 mb-0">Georgian guide</h3>
    </div> -->

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"> </span>
        </button>
        <h4 class="me-auto ms-2">Menu</h4>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Маршрyты
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="Enums.PageUrl.LongCarRoutes">
                    Длинные маршруты
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="Enums.PageUrl.DailyCarRotesFromTbilisi">
                    Маршруты из Тбилиси на 1 день
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="Enums.PageUrl.Tbilisi">
                    Марштуры в Тбилиси
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="Enums.PageUrl.Batumi">
                    Места около Батуми и на побережье
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                id="logOutDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Еда
              </a>
              <ul class="dropdown-menu" aria-labelledby="logOutDropdown">
                <li>
                  <router-link class="dropdown-item" :to="Enums.PageUrl.Shops">
                    Магазины
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" :to="Enums.PageUrl.Dishes">
                    Блюда и продукты
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="Enums.PageUrl.Restaurant">
                    Пару мест поесть
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link
                  class="dropdown-item"
                  :to="Enums.PageUrl.PublicTransport">
                  Общественный транспорт Тбилиси
                </router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { Enums } from '@shared';
</script>
