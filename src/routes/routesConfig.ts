import { lazy } from 'react';
import { routeAccess, routes } from './routeConstants';
import { IRoutesConfigType } from 'src/lib/types';
import Explore from 'src/screens/Explore';
import MapAnimated from 'src/screens/MapAnimated';

const Home = lazy(() => import('../screens/Home'));
const Support = lazy(() => import('src/screens/Support'));
const ItineraryDetailsForm = lazy(() => import('../screens/ItineraryDetailsForm'));
const PlanDetail = lazy(() => import('../screens/PlanDetail'));
const PrintPlanDetail = lazy(() => import('../screens/PlanDetail/printPdf'));
const Checklist = lazy(() => import('../screens/CheckList'));

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
      path: routes.PRINT_PLAN_DETAIL,
      component: PrintPlanDetail,
      layout: routeAccess.PUBLIC,
      isHeader: false,
    },
    {
      path: routes.EXPLORE,
      component: Explore,
      layout: routeAccess.PUBLIC,
      isHeader: true,
    },
    {
      path: routes.ITINERARY_DETAILS_FORM,
      component: ItineraryDetailsForm,
      layout: routeAccess.PUBLIC,
      isHeader: false,
      isFooter: false,
    },
    {
      path: routes.MAPANIMATED,
      component: MapAnimated,
      layout: routeAccess.PUBLIC,
    },
    {
      path: routes.CHECKLIST,
      component: Checklist,
      layout: routeAccess.PUBLIC,
    },
  ];
};

export default routesConfig;
