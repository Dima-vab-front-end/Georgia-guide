import { Interfaces } from '@shared';
import { reactive } from 'vue';

export default function () {
  const listOfRoutes: Interfaces.IArticle[] = [
    {
      id: '1',
      title: 'Через Рачу',
      navigationRoute:
        'https://yandex.ru/navi?rtext=41.788341%2C44.739871~42.764270%2C43.508032~42.701582%2C43.674904~42.547145%2C42.870687~42.654805%2C42.773213~42.495279%2C42.551079&rtt=auto', //add from yandex map
      description:
        'Топ маршрут, несложно проехать но попадешь в самые красивые места Грузии',
      additionalContent: [
        {
          youtubeLink:
            'https://www.youtube.com/embed/TRfE5nWH_TI?si=thK4f3PTrSDs194R',
          title: 'Наше видео c похода примерно с 1 точки.'
        }
      ],
      image:
        'https://cdn.georgia.to/img/thumbnails/NUDAeEkAmXGQBekVVESBQn_smedium.jpg',

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
          image:
            'https://lh3.googleusercontent.com/proxy/9X7EpiOs9uGZbiW62xFfbPX0fSekEC8ZcxYh_pJOKIkRZ8WJp4yzbIieHmbNct3Dq1mER-OtOLZKFEzqx6eG_7AwsqaMWj9U'
        },
        {
          id: '12',
          title: 'Саирме (прикольные столбы)',
          description:
            'Прикольное место по дороге, можно сильно долго время не тратить и не гулять, не моуг разместить в личный топ, но если такое привлекает, то почему нет',
          image:
            'https://madloba.info/media/images/Kolonny-Sairme.max-1200x1200.format-webp.webp',
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
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Lajanura_Gorge_%28G.N._2009%29.jpg/1200px-Lajanura_Gorge_%28G.N._2009%29.jpg'
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
          image:
            'https://gruziyagid.ru/wp-content/uploads/2024/01/chem-znamenit-vodopad-kinchha-1.jpg'
        },
        {
          id: '16',
          title: 'Кинчха Каньен',
          description: `Там же рядом очень красивый каньен Кинчха по которому можно бесплатно погулять и в нем поплавать`,
          image:
            'https://bptrip.ru/wp-content/uploads/2017/05/vodopady-kutaisi-gruzia.jpg',
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
          image: 'https://storage.georgia.travel/images/lomina-gnta.webp',
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
          image:
            'https://gotrip.ge/blog/wp-content/uploads/2022/12/shutterstock_1434243356.jpeg'
        }
      ]
    }
  ];

  return reactive({ listOfRoutes });
}
