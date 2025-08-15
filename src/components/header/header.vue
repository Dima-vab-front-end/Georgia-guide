<template>
  <header class="w-100">
    <div>
      <h3 class="d-flex p-3 mb-0">Georgian guide</h3>
    </div>

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
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Авто маршрyты
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="Enums.PageUrl.CarRoutes">
                    Длинные маршруты
                  </router-link>
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    >Маршруты из Тбилиси на 1 день</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">Марштуры в Тбилиси</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Маршруты из Батуми</a>
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
                <li><a class="dropdown-item" href="#">Магазины</a></li>
                <li><a class="dropdown-item" href="#">Рынки</a></li>
                <li>
                  <a class="dropdown-item" href="#">Ресораны</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Общественный транспорт</a>
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
