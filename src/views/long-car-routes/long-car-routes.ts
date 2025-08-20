import { Interfaces } from '@shared';
import { reactive } from 'vue';

export default function () {
  const listOfRoutes: Interfaces.IArticle[] = [
    {
      id: '1',
      title: 'Через Рачу',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.789710%2C44.739876~42.764270%2C43.508032~42.547145%2C42.870687~42.646777%2C42.768117~42.489630%2C42.624133~42.495279%2C42.551079~42.528224%2C42.551731~42.457174%2C42.377062&rtt=auto', //add from yandex map
      description:
        'Топ маршрут, несложно проехать но попадешь в самые красивые места Грузии',
      additionalContent: [
        {
          youtubeLink:
            'https://www.youtube.com/embed/TRfE5nWH_TI?si=thK4f3PTrSDs194R',
          title: 'Наше видео c похода примерно с 1 точки.'
        }
      ],
      image: './racha.jpg',

      children: [
        {
          id: '11',
          title: 'Рача около деревень Геби и Шови',
          description: `Очень красивые виды из деревь Гоби и Шови. Рекомендую остановится на ночевку в деревне Гоби или Глола.
           Рекомендую заехать до Шови и До Геби(классные виды на ледники, да и там рядом) и там переночевать(очень простые условия деревни)
           или же в "Они"(побольше населенный пункт)`,
          additionalContent: [
            {
              youtubeLink:
                'https://www.youtube.com/embed/TRfE5nWH_TI?si=thK4f3PTrSDs194R',
              title:
                'Наше видео c похода в той местности к самому красивому озеру в Грузии'
            },
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/s2PesoU8WDLMwa2EA'
            }
          ],
          image: './racha-2.jpg'
        },
        {
          id: '12',
          title: 'Саирме (прикольные столбы)',
          description:
            'Прикольное место по дороге, можно сильно долго время не тратить и не гулять, не моуг разместить в личный топ, но если такое привлекает, то почему нет',
          image: './sairme.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/mm3UUVFyuU1XL3Dx9'
            }
          ]
        },
        {
          id: '13',
          title: 'Цагери (очень красивое ущелье по дороге)',
          description: `по дороге очень красивое ущелье в котором нужно ехать, 
          а в самой деревне ничего нет, просто маршрут красивый`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/C4wXFkKUZqpwuSFV6'
            }
          ],
          image: './tsageri.jpg'
        },
        {
          id: '14',
          title: 'Ophitara Three Cascade Waterfall',
          description: `Приятная точка остановится и немного отдохнуть`,
          image:
            'https://www.reinisfischer.com/sites/default/files/inline-images/DJI_0386-HDR.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/Fg3uJBgDa8CWdBuN8'
            }
          ]
        },
        {
          id: '15',
          title: 'Окаце Водопад(кинчха)',
          description: `Очень высокий водопад(общаяя высота 3 ступеней - 120метров)`,
          additionalContent: [
            {
              isShorts: true,
              youtubeLink:
                'https://youtube.com/embed/Hx6p9_Rl5Io?si=6KOVkbWmES0Dmb-P',
              title: 'Наш шортс из этого места'
            },
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/7PvWxJT842jaV7jp8'
            }
          ],
          image: './okatse.jpg'
        },
        {
          id: '16',
          title: 'Кинчха Каньен',
          description: `Там же рядом очень красивый каньен Кинчха по которому можно бесплатно погулять и в нем поплавать`,
          image: 'kinchha.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/qoDzmgUAJ6dzwFmn7'
            }
          ]
        },
        {
          id: '17',
          title: 'Ломина Водопад',
          description: `Приятный водопад рядом с предыдущей точкой(5км). Из интересного что под ним можно походить, высота его метров 8 примерно`,
          image: './lomina.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/7PvWxJT842jaV7jp8'
            }
          ]
        },
        {
          id: '18',
          title: 'Каньен Мартвили',
          description: `Очень известное туристическое место, вход 15-20лари, за еще 15лари можно покататься на лодке минут 15
          Вообще очень красиво там и впечатлсяюще`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/yt6TWaXswtyJKvFv8'
            }
          ],
          image: './martvili.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Через Вардзию',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.788555%2C44.739831~41.593811%2C44.124545~41.381076%2C43.284224~41.642592%2C42.976353~41.843148%2C43.384046&rtt=auto', //add from yandex map
      description:
        'Классный маршрут, через пещерный город исамую красивую крепость Грузии',
      image: './rabat.jpg',

      children: [
        {
          id: '21',
          title: 'Каньен Дашбаши',
          description: `Красивый каньен с стекляным мостом, но стоит много, поэтому можно просто взглянуть со стороны и ехать дальше`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/x7HzucvRf1V1ZvgF6'
            }
          ],
          image:
            'https://zectour.com/ru/image/loadimage?f=https://zectour.com/public/filemanager/1%20SEDANIT%20TUREBI/21%20DASHBASHI/2.jpg&w=480&h=400'
        },
        {
          id: '22',
          title: 'Вардзиа(пещерный город)',
          description:
            'Очень аутентичное место, главное не остановится и пройти в внутреннтих пещерах, вход возле церкви.',
          image: './vardzia.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/11WhYkLyyZxDsK1s6'
            }
          ]
        },
        {
          id: '23',
          title: 'Крепость Рабат(Турецко-Грузинская крепость)',
          description: `Самая красивая крепость в Грузии. Большая часть бесплатная, но есть и платная зона`,
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/ajBhXq422jeD8qbb9'
            }
          ],
          image: './rabat.jpg'
        },
        {
          id: '24',
          title: 'Боржоми',
          description: `В городе производят воду Боржоми, а так ничего особого, но есть теплые источники.`,
          image:
            'https://georgia.in-facts.info/wp-content/uploads/2019/01/Most-petlya-okolo-otelya---Crowne-Plaza-Borjomi---Borzhomi-Gruziya.jpg',
          additionalContent: [
            {
              title: 'Место на гугл картах',
              link: 'https://maps.app.goo.gl/2g292a3MkUimhBVa8'
            }
          ]
        }
      ]
    }
  ];

  return reactive({ listOfRoutes });
}
