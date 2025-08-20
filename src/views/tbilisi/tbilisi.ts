import { Interfaces } from '@shared';
import { computed, reactive } from 'vue';
import { v4 as generateUID } from 'uuid';

export default function () {
  const listOfRoutes = computed((): Interfaces.IArticle[] => [
    {
      id: generateUID(),
      title: 'Старый Город',
      navigationRoute: `https://yandex.com.ge/maps/10277/tbilisi/?ll=44.811049%2C41.692395&mode=routes&rtext=41.698057%2C44.797734~41.690948%2C44.803656~41.689152%2C44.804477~41.687208%2C44.811009~41.687256%2C44.809966~41.689677%2C44.809174~41.690416%2C44.810574~41.690085%2C44.810965~41.691674%2C44.812707~41.693003%2C44.811594~41.693159%2C44.810671~41.696660%2C44.806545~41.696971%2C44.803326~41.699368%2C44.801283~41.698146%2C44.797811&rtt=pd&ruri=~~~~~ymapsbm1%3A%2F%2Forg%3Foid%3D132798286680~ymapsbm1%3A%2F%2Forg%3Foid%3D83445082282~~ymapsbm1%3A%2F%2Forg%3Foid%3D192293236308~~~~~~&z=17.88`,
      description:
        'Подорбрал хороший ПЕШИЙ маршрут, но вообще в той местности можно идти в любую сторону, но я подобрал вроде неплохие точки',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/0WlReDTRWfM?si=GsxwB7g5QYSyyAJC',
          title: 'Шортс из старого города'
        }
      ],
      image: './tbilisi.jpg',
      children: [
        {
          id: generateUID(),
          title: 'Площадь Гудиашвили',
          description: 'Небольшая красивая площадь с отреставрироваными домами',
          image:
            'https://steelhouse.ge/wp-content/uploads/2022/06/249019424-3764965793606829-8276643773246577462-n-80851-1635322371-1.jpg',
          additionalContent: [
            {
              title: 'Шортс с местами из 1 и 2 точки',
              isShorts: true,
              youtubeLink:
                'https://youtube.com/embed/P2GCg3PMX7Q?si=oWdGGlEDRKVAbLgL'
            }
          ]
        },
        {
          id: generateUID(),
          title: 'Земо Бетлеми',
          description:
            'Небольшая церквушка с красивыми видами на город. Если есть желание, то можно подняться выше к скульптупе мать Грузия, но сейчас проход с нее на крепость Нарикала закрыт, поэтмоу не веду тудой',
          image: './zemo-betlemi2.jpg',
          additionalContent: [
            {
              title: 'Шортс с местами из 1 и 2 точки',
              isShorts: true,
              youtubeLink:
                'https://youtube.com/embed/P2GCg3PMX7Q?si=oWdGGlEDRKVAbLgL'
            }
          ]
        },
        {
          id: generateUID(),
          title: 'Серные Бани',
          description:
            'Древние бани, в одной из них парился Пушкин, а атк вообще очень красивый вид и если откроют, то можно будет подойти к водопаду',
          image:
            'https://i0.wp.com/tipstrips.ru/wp-content/uploads/2019/03/%D0%9F%D0%B5%D1%81%D1%82%D1%80%D0%B0%D1%8F-%D0%9E%D1%80%D0%B1%D0%B5%D0%BB%D0%B8%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F-%D0%B1%D0%B0%D0%BD%D1%8F-1-min.jpg?resize=870%2C580&ssl=1'
        },
        {
          id: generateUID(),
          title: 'Ботаническая улица',
          description:
            'Красивая улица, но самое приятное это проход к ней от ручья между домов',
          additionalContent: [
            {
              title: 'Узкие улицы в этом шортсе именно с этой местности',
              isShorts: true,
              youtubeLink:
                'https://youtube.com/embed/0WlReDTRWfM?si=ILyvx9d4l9pjSHfw'
            }
          ],
          image: './botanic-steet.jpg'
        },
        {
          id: generateUID(),
          title: 'Мейдан Базар',
          description:
            'Маленький подземный аутентичный рынок с интересными Грузинскими достопримечательностями',

          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgQTcYEao5PvdNuAJXb8elWlokwTQoQ5iVg&s'
        },
        {
          id: generateUID(),
          title: 'Церковь Або Тбилисского',
          description:
            'Буквально 10 метров с маршрута расположен выход к воде с красивой каменной церковью',

          image: 'https://i.ytimg.com/vi/BroyQglA_20/maxresdefault.jpg'
        },
        {
          id: generateUID(),
          title: 'Храм Метехи',
          description:
            'Красивый храм, так еще и построен первый храм был в 5 веке, а дальше многократно востанавливался после нападений',

          image: './metehi.jpg'
        },
        {
          id: generateUID(),
          title: 'Дворец Царицы Дариджан(Балкон для фоток))',
          description:
            'Вот тут точно прийдется фоткать жену). Шикарное место для фоток с балкона',

          image:
            'https://madloba.info/media/images/dvorec-daredzhan-tbili.2e16d0ba.fill-1200x630.format-png.png'
        },
        {
          id: generateUID(),
          title: 'Мост Мира',
          description:
            'Туристы очень любят это место, да и виды с него приятные',

          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR3gLG41p_1nKnFyA3mzonfn8AIgiPk_zZIg&s'
        },
        {
          id: generateUID(),
          title:
            'Это еще не все, на маршруте много других классных мест, но мне надоело писать, сорри)',
          description: '',

          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41ofRGjJroe9w7iUqaomJR5JTAjTmi2qarg&s'
        }
      ]
    },
    {
      id: '2',
      title:
        'Ботанический сад(используйте точку "Открыть маршрут в новигаторе" если вы на авто)',
      navigationRoute: 'https://yandex.com.ge/maps/-/CHxiEYJJ',
      description:
        'Используйте точку Открыть маршрут в новигаторе если вы на авто и используйте точку на гугл картах если вы пешком. Очень красивый сад, несколько водопадов, красивая пророда, скалы и все это за 4 лари с человека. Вход около статуи "Мать-Грузия". Конкретный маршрут не прописал, но рекомендую пройти через весь сад, чтобы и возле бамбука и возле водопадов погулять',
      image:
        'https://nlevshits.com/wp-content/uploads/2023/09/botanicheskij-sad-0-e1694329823527.jpg',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/QP3V0e5NClU?si=eRGRxzST8eWHtzQB',
          title: 'Наше видео c похода примерно с 1 точки.'
        },
        {
          title: 'Место на гугл картах',
          link: 'https://maps.app.goo.gl/QZz3nhnGjDpJ8oUL8'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'Мтацминда парк',
      navigationRoute: 'https://yandex.com.ge/maps/-/CHxiqX9Y', //add from yandex map
      description: `Классные виды на город. Довольно простой парк, но очень красиво расположен, если есит желание можно покататься на фуникулере или канатной дороге.
        Есть пешие тропы в центр города, есть красивая горная тропа к черепашьему озеру`,

      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/60/19/80/day-view.jpg?w=800&h=500&s=1',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/0_ZpMhz4vVI?si=5dJcwwNzvLfFgrlU',
          title: 'Шортс'
        },
        {
          title: 'Место на гугл картах',
          link: 'https://maps.app.goo.gl/qHgeprhbEaP9nUss5'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'Ваке и черепашье озеро',
      navigationRoute: 'https://yandex.com.ge/maps/-/CHxi5Bnq', //add from yandex map
      description: `Современный район, с точки которую обозначаю в новигаторе открывается вид на район, можно проехать на канатной дороге за 1 лари в 1 сторону. А если еще немного пройтись над озером, то вообще
      будут потрясающие виды, возможно даже будет виден Кавказский хребет и Казбек`,

      image:
        'https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0076-7.jpg',
      additionalContent: [
        {
          isShorts: true,
          youtubeLink:
            'https://youtube.com/embed/ivWM_NY8SM4?si=5KFPfnmEKvJnamOZ',
          title: 'Шортс'
        },
        {
          title: 'Место на гугл картах',
          link: 'https://maps.app.goo.gl/6MiXyfchKEPA19kM8'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'Мемориал Хроники Грузии',
      navigationRoute: 'https://yandex.com.ge/maps/-/CHxiBIKC', //add from yandex map
      description: `Очень аутентичное место с барельефами из Библии и Истории Грузии`,

      image: 'https://cdn.getyourguide.com/img/tour/63d03a683ec49.jpeg/68.jpg',
      additionalContent: [
        {
          title: 'Место на гугл картах',
          link: 'https://maps.app.goo.gl/6MiXyfchKEPA19kM8'
        }
      ]
    },
    {
      id: generateUID(),
      title: 'Еще один по старому городу',
      navigationRoute:
        'https://www.google.com/maps/dir/41.7178633,44.7912911/41.703223,44.8041886/41.7008275,44.8029622/41.6986568,44.7981292/41.7039316,44.7903487/@41.7051634,44.7887898,15.91z/data=!4m8!4m7!1m1!4e1!1m0!1m0!1m0!1m0!3e2?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D', //add from yandex map
      description: `Рекомундую еще один маршрут, а вообще можно сходить и идти в разные стороны, у Тбилиси большой старый город, есть на что смотреть`,

      image: 'https://mapsia.ru/img/tbilisi/david.jpg'
    }
  ]);

  return reactive({ listOfRoutes });
}
