

import { lazy } from 'react';
import { routeAccess, routes } from './routeConstants';
import { IRoutesConfigType } from 'src/lib/types';

const Home = lazy(() => import('../screens/Home'));
const Support = lazy(() => import('src/screens/Support'));

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
      isHeader: false,
    },
  ];
};

export default routesConfig;
