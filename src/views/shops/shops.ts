import { Interfaces } from '@shared';
import { computed, reactive } from 'vue';
import { v4 as generateUID } from 'uuid';

export default function () {
  const listOfRoutes = computed((): Interfaces.IArticle[] => [
    {
      id: generateUID(),
      title: 'Carrefour',
      description:
        'Крупные магазины хорошо подходят чтобы закупаться на неделю вперед в 1 месте, цены не самые выгодные в таком случае, но в целом лучший вариант для туристов',
      image:
        'https://avatars.mds.yandex.net/get-altay/10812365/2a0000018bf8ed4ccf3b6d36c35c675b09b4/orig'
    },
    {
      id: generateUID(),
      title: 'Orinabiji(лидер бюджетников)',
      description:
        'Магазин у дома - низкий цены, небольшой асортимент, но они рядом',
      image:
        'https://avatars.mds.yandex.net/get-altay/11522875/2a0000018e1b02badd6a2d36ef3c23fef7e0/L_height',
      additionalContent: [
        {
          title: 'Их сайт с каталогом',
          link: 'https://2nabiji.ge/en'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'libre ', //add from yandex map
      description: `Магазин у дома - низкий цены, небольшой асортимент, но они рядом. Хороший вариант чтобы совместить с Orinabiji`,

      image:
        'https://avatars.mds.yandex.net/get-altay/11937297/2a0000018e0a2f220cdde1020b09b82f231b/L_height'
    },
    {
      id: generateUID(),
      title: 'Magniti ', //add from yandex map
      description: `Еще один магазин у дома с норм асортиментом`,

      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl0INYzFORPx1d_3weoBxuJiCM80F-8bBECg&s'
    },
    {
      id: generateUID(),
      title: 'BIUMART(классные куриные товары)', //add from yandex map
      description: `Сеть магазинов с классными куриными продуктами. Есть еще bui bui, но в них только куриное мясо, а в этом есть и колбаса и разное`,

      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROsOyr3uQMD-pQWGmK_oEBoNOmx1MMFYRE2w&s'
    },
    {
      id: generateUID(),
      title: 'Nikora ', //add from yandex map
      description: `Средние цены, но больше асортимента(ассортимент немного отличается в филиалах)`,

      image:
        'https://avatars.mds.yandex.net/get-altay/9833544/2a00000191a223d5658bbd75a3ce93aa8358/L_height'
    }
  ]);

  return reactive({ listOfRoutes });
}
