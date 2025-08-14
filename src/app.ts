import { useHead } from '@vueuse/head';
import { reactive } from 'vue';

export default function () {
  useHead({
    script: [{}]
  });

  //#region variables/data

  //#endregion

  return reactive({});
}
