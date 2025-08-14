<!-- eslint-disable no-unused-vars -->
<template>
  <footer>Footer content {{ root }}</footer>
</template>

<script lang="ts" setup>
import footer from './footer';

// TODO remove if there is no use
const root = footer();
</script>
