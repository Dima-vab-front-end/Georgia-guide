import { Interfaces } from '@shared';
import { computed, reactive } from 'vue';
import { v4 as generateUID } from 'uuid';

export default function () {
  const listOfRoutes = computed((): Interfaces.IArticle[] => [
    {
      id: generateUID(),
      title: 'Ботанический Сад',
      navigationRoute: `https://yandex.com.ge/maps/-/CHxVaZNg`,
      description:
        'Прям очень класный ботанический сад, крайне рекомендую, стоит 20 лари с человека, но оно того стоит',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/Nlznpzt5TTg?si=gH5ceDYsO9aA_EwA',
          title: 'Такой себе, но наш шортс'
        }
      ],
      image:
        'https://spbinteres.ru/wp-content/uploads/2020/08/batumi-botanical-garden-870x400.jpg'
    },
    {
      id: generateUID(),
      title: 'Дендрологический парк',
      navigationRoute: 'https://yandex.com.ge/maps/-/CHxViP5P', //add from yandex map
      description:
        'Приятный бесплатный парк, много редкий деревьев, редких птиц',
      image:
        'https://nlevshits.com/wp-content/uploads/2024/09/2024-09-15-11.43.37-e1726386350456.jpg',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/z8F00jN6Z_g?si=DMfkvbdWIRDtFtgZ',
          title: ''
        },
        {
          title: 'Место на гугл картах',
          link: 'https://maps.app.goo.gl/L2aWruXw7mhtW9Za7'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'Пляжи(лично мне нравится Шекветили и хочу попасть в Квариати)', //add from yandex map
      description: `Лучше посмотрите по ссылке. А мне нравится пляж из черного песка возле дендропарка в Шекветили`,

      image:
        'https://allmyworld.ru/wp-content/uploads/2017/10/shekvetili-plyazh-gruziya-16.jpg',
      additionalContent: [
        {
          link: 'https://nlevshits.com/plyazhi-gruzii-na-chernom-more/',
          title: 'Вот норм статья'
        }
      ]
    }
  ]);

  return reactive({ listOfRoutes });
}
