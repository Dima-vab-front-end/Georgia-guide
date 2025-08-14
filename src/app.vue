<template>
  <app-header></app-header>
  <router-view />
  <app-footer></app-footer>
</template>

<script lang="ts" setup>
import { AppHeader } from './components/header';
import { AppFooter } from './components/footer';
</script>
