<template>
  <footer id="footerBar" class="footer mt-0 d-flex mt-5">
    <div class="py-4">
      <h5>Никаких прав нет {{ root.currentYear }}</h5>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import footer from './footer';

// TODO remove if there is no use
const root = footer();
</script>

<style lang="scss" src="./footer.scss"></style>
