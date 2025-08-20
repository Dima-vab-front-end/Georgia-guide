import { Interfaces } from '@shared';
import { computed, reactive } from 'vue';
import { v4 as generateUID } from 'uuid';

export default function () {
  const listOfRoutes = computed((): Interfaces.IArticle[] => [
    {
      id: generateUID(),
      title: 'Чкмерули',
      description:
        'Чкмерули (или шкмерули) - это популярное грузинское блюдо, представляющее собой цыпленка, обжаренного и затем запеченного в сливочно-чесночном соусе. Очень сытное мясное блюдо',
      image: 'https://cosori.ru/media/posters/recipe/chkmeruli.jpg'
    },
    {
      id: generateUID(),
      title: 'Хачапури по аджарски(есть еще виды хачапури)',
      description:
        'Кто же его не знает, еште руками, ножом можно только яичный желток перемешать',
      image:
        'https://static.tildacdn.com/tild3033-3632-4130-b066-326364656233/Instagram_Post__352.jpg'
    },
    {
      id: generateUID(),
      title: 'Бадриджани ', //add from yandex map
      description: `Популярная закуска, состоящая из обжаренных ломтиков баклажанов, завернутых с ореховой начинкой.`,

      image:
        'https://cravemonkey.pl/wp-content/uploads/2019/01/DSC_0683_g%C5%82%C3%B3wny.jpg'
    },
    {
      id: generateUID(),
      title: 'Шампиньоны с сулугуни ', //add from yandex map
      description: '',

      image:
        'https://img.povar.ru/mobile/7b/58/16/fb/shampinoni_s_suluguni-264907.jpeg'
    },
    {
      id: generateUID(),
      title: 'Хинкали', //add from yandex map
      description: `В Грузии в них добавляют больше зелени, кушать желательно не вилкой и ножом)`,

      image:
        'https://img1.russianfood.com/dycontent/images_upl/679/big_678127.jpg'
    },
    {
      id: generateUID(),
      title: 'Лимодюнады(мне нравятся с лимоном)', //add from yandex map
      description: `Средние цены, но больше асортимента(ассортимент немного отличается в филиалах)`,

      image:
        'https://cafemimino.ru/wp-content/uploads/2017/11/57c80d51ad90c_0.jpeg'
    },
    {
      id: generateUID(),
      title: 'Копченый сулгуни', //add from yandex map
      description: `Очень приятная штука`,

      image:
        'https://halal-spb.ru/sites/default/files/products/suluguni_kruglyy_kopchenyy.jpg'
    },
    {
      id: generateUID(),
      title: 'Шаурма', //add from yandex map
      description: `В Грузии в ней очень много мяса, она прям очень сытная и вкусная в нормальных местах`,

      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/2e/e6/ba/our-menu-we-have-chicken.jpg?w=900&h=500&s=1'
    },
    {
      id: generateUID(),
      title: 'Чурчхела', //add from yandex map
      description: `Прикольная, полезная сладость, берите не сухую(не белую желательно)`,

      image:
        'https://fruchtschmaus.com/cdn/shop/files/1196_Product_88d85113-da93-494e-812c-25334fcaff4f.jpg?v=1685198096&width=1445'
    }
  ]);

  return reactive({ listOfRoutes });
}
