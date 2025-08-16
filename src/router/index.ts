import { Enums } from '@shared';
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router';
// import { useStore } from '@/store';

export let currentRouter: Router | undefined = undefined;

// eslint-disable-next-line no-unused-vars
export function setupUnauthorizedUrls(config: any) {
  return [];
}

export function setupRouter() {
  const routes: RouteRecordRaw[] = [
    {
      path: Enums.PageUrl.HomePage,
      name: 'Root',
      component: () => import('../views/home/home.vue'),
      meta: {
        title: `Home Page`
      }
    },
    {
      path: Enums.PageUrl.LongCarRoutes,
      name: 'Root',
      component: () => import('../views/long-car-routes/long-car-routes.vue'),
      meta: {
        title: `Car Routes`
      }
    },
    {
      path: Enums.PageUrl.DailyCarRotesFromTbilisi,
      name: 'Root',
      component: () =>
        import(
          '../views/daily-car-routes-from-tbilisi/daily-car-routes-from-tbilisi.vue'
        ),
      meta: {
        title: `Car Routes`
      }
    }
    // {
    //   path: Enums.PageUrl.Page404,
    //   redirect: Enums.PageUrl.HomePage
    // }
  ];

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        };
      }

      return savedPosition || { top: 0 };
    }
  });

  router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title as string;
    document.title = pageTitle;
    next();
  });

  currentRouter = router;
  return router;
}
