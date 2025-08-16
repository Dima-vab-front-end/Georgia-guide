import { Interfaces } from '@shared';
import { reactive } from 'vue';

export default function () {
  const listOfRoutes: Interfaces.IArticle[] = [
    {
      id: '1',
      title: 'Поездка к Гергети',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.788341%2C44.739871~42.764270%2C43.508032~42.701582%2C43.674904~42.547145%2C42.870687~42.654805%2C42.773213~42.495279%2C42.551079&rtt=auto', //add from yandex map
      description:
        'Очень красивый маршрут, если вы едете из РФ или в РФ, то очень рекомендую заехать на все точки, они прям очень по пути. Так же это легкий однодневный маршрут из Тбилиси',
      additionalContent: [
        {
          youtubeLink:
            'https://www.youtube.com/embed/5ugeoDL_n-c?si=uq5lWEpVAslCafE4',
          title: 'Наше видео c канатной дороги Гудаури(точка 2) '
        }
      ],
      image:
        'https://www.advantour.com/img/georgia/stepantsminda/gegreti-trinity-church-stepantsminda.jpg',

      children: [
        {
          id: '11',
          title: 'Ананури',
          description: `Приятная крепость прям по пути, хорошая точка чтобы остановится, отдохнуть и посмотретть на водохранилище`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/ahQEvLUEV4oGV1vv5'
            }
          ],
          image:
            'https://gamarjoba-ru.storage.yandexcloud.net/page/image/6c87fb03-4d91-4e8c-8f1f-be4c446f0acb.JPG'
        },
        {
          id: '12',
          title:
            'Гудаури - летняя и зимняя канатная дорога (пропустите если мало времени)',
          description:
            'Если есть время и нет облаков, то там можно подняться на высоту 3300 и посмотреть красивые виды на заснеженные горы. Поездка стоит около 35лари и занимает пару часов. Есть много точек где можно выйти и погулять',
          image:
            'https://toursgeorgia.ge/wp-content/uploads/2017/09/resort-gudauri-in-summer-or-where-to-find-the-cool-climate-and-picturesque-mountains-in-georgia-3-1.jpg',
          additionalContent: [
            {
              youtubeLink:
                'https://www.youtube.com/embed/5ugeoDL_n-c?si=uq5lWEpVAslCafE4',
              title: 'Наше видео c канатной дороги Гудаури'
            },
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/gBEVW5YxVDy6jkEL8'
            }
          ]
        },
        {
          id: '13',
          title: 'Арка дружбы народов',
          description: `Потрясающие виды во все стороны и всего 20-50 метров с дороги`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/CdNxDgkcoX7eJiFu5'
            }
          ],
          image:
            'https://cdn.georgia.to/img/thumbnails/XsePpmT6iNWTqUTKR2T69E_smedium.jpg'
        },
        {
          id: '14',
          title: 'Минеральный источник',
          description: `Место не является прям особым, но оно по пути и там можно попить минералки`,
          image:
            'https://agnesfotoblog.wordpress.com/wp-content/uploads/2018/05/img_5178_fotor.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/C8stwnkVSHHzmGpz5'
            }
          ]
        },
        {
          id: '15',
          title: 'Троицкая церковь',
          description: `Церковь на высотке 2170метров с одними из лучших видов в Грузии, прекрасно виден Казбек и подходит для классных фоток, с дороги нужно съехать и подняться по серпантину. Зимой может быт опасно`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/khvAnLhf7sXyhYBfA'
            }
          ],
          image:
            'https://tourguide.ge/wp-content/uploads/2019/03/Seeing-from-Gergeti.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Водопад Ниносхеви(хайкинг к очень красивому водопаду)',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.788341%2C44.739871~42.764270%2C43.508032~42.701582%2C43.674904~42.547145%2C42.870687~42.654805%2C42.773213~42.495279%2C42.551079&rtt=auto', //add from yandex map
      description: `Средней сложности однодневный хайк, зайти в 2 стороны можно за 4-5 часов, прогулка по очень красивому лесу, местами вдоль горной реки.
         Даже внизу, если никуда не идти, это очень красивое место.Можно поехать многодневным маршрутом №3.
         Рекомендую выезжать из Тбилиси до 10 утра, чтобы спокойно приехать, пройтись и уехать.`,
      image:
        'https://www.advantour.com/img/georgia/tours/ninoskhevi-waterfall-tour/lagodekhi-national-park9.jpg',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/ne-43WMa8Q4?si=-cLnYC62S0cVLThp',
          title: 'Наш шортс из этого места'
        }
      ]
    },
    {
      id: '3',
      title: 'Озера Абуделаури',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.788341%2C44.739871~42.764270%2C43.508032~42.701582%2C43.674904~42.547145%2C42.870687~42.654805%2C42.773213~42.495279%2C42.551079&rtt=auto', //add from yandex map
      description: `Средней сложности однодневный хайк, зайти в 2 стороны можно за 4-5 часов, прогулка по очень красивому лесу, местами вдоль горной реки.
         Даже внизу, если никуда не идти, это очень красивое место.Можно поехать многодневным маршрутом №3.
         Рекомендую выезжать из Тбилиси до 10 утра, чтобы спокойно приехать, пройтись и уехать.`,
      image: 'public/abudelauri.jpg',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/ne-43WMa8Q4?si=-cLnYC62S0cVLThp',
          title: 'Наш шортс из этого места'
        }
      ]
    }
  ];

  return reactive({ listOfRoutes });
}
