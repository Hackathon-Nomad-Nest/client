

import { lazy } from 'react';
import { routeAccess, routes } from './routeConstants';
import { IRoutesConfigType } from 'src/lib/types';

const Home = lazy(() => import('../screens/Home'));

const routesConfig = (): Array<IRoutesConfigType> => {

  return [
    {
      path: routes.HOME,
      component: Home,
      layout: routeAccess.PUBLIC,
    },
  ];
};

export default routesConfig;
