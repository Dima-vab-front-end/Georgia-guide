import { computed, reactive } from 'vue';

export default function () {
  const currentYear = computed(() => new Date().getFullYear());

  return reactive({
    currentYear
  });
}
