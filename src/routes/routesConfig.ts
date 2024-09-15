import { lazy } from 'react';
import { routeAccess, routes } from './routeConstants';
import { IRoutesConfigType } from 'src/lib/types';
import Explore from 'src/screens/Explore';

const Home = lazy(() => import('../screens/Home'));
const Support = lazy(() => import('src/screens/Support'));
const PlanDetail = lazy(() => import('../screens/PlanDetail'));

const routesConfig = (): Array<IRoutesConfigType> => {
  return [
    {
      path: routes.HOME,
      component: Home,
      layout: routeAccess.PUBLIC,
    },
    {
      path: routes.SUPPORT,
      component: Support,
      layout: routeAccess.PUBLIC,
    },
    {
      path: routes.PLAN_DETAIL,
      component: PlanDetail,
      layout: routeAccess.PUBLIC,
      isHeader: false,
    },
    {
      path: routes.EXPLORE,
      component: Explore,
      layout: routeAccess.PUBLIC,
      isHeader: true,
    },
  ];
};

export default routesConfig;
