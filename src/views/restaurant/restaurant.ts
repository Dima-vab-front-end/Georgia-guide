import { Interfaces } from '@shared';
import { computed, reactive } from 'vue';
import { v4 as generateUID } from 'uuid';

export default function () {
  const listOfRoutes = computed((): Interfaces.IArticle[] => [
    {
      id: generateUID(),
      title: 'Tiflisi Vorontsovze',
      navigationRoute: 'https://maps.app.goo.gl/S2cY2S3eLvxYFhi26',
      description:
        'Хорошая грузинская кухня. Обычно отличное чкмерули, баклажаны, грибы и хачапури ну и прочие блюда, вкидывают 18% сверху цены в итоговыый чек',
      image: ''
    },
    {
      id: generateUID(),
      title: 'Wrap Master',
      navigationRoute: 'https://maps.app.goo.gl/abr8CKPdtWW3Tv5D9',
      description:
        'Классное место, зайти в центре перекусить или даже наесться. Вкусная кортошка фри и клаcсный врап, есть в центре, с блюю чиз прям топ. В этом же здании есть много других классных заведений',
      image: ''
    },
    {
      id: generateUID(),
      title: 'Kebab House ',
      navigationRoute: 'https://maps.app.goo.gl/npvVEWbcsnKJYCbP7',
      description: `Вкусные иранские кебабы, типо шашлык, но не для грузинской кухни. Не путать с шаурмой, это просто мясо + гарнир, там еще хлебная лепешка из печи шикарная)`,
      image: ''
    },
    {
      id: generateUID(),
      title: 'Шаурма', //add from yandex map
      description:
        'Топ еда в Грузии. За небольшие деньги много мяса. Много классных шаурмечных, можно смотреть отзывы про ближайшие к вам шаурмечные их много по городу',

      image: ''
    }
  ]);

  return reactive({ listOfRoutes });
}
