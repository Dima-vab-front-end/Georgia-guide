<template>
  <app-header></app-header>
  <main class="container">
    <router-view />
  </main>
  <app-footer></app-footer>
</template>

<script lang="ts" setup>
import { AppHeader } from './components/header';
import { AppFooter } from './components/footer';
</script>

<style lang="scss" src="./app.scss"></style>
