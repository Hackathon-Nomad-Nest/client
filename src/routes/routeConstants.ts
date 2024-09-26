export enum routes {
  HOME = '/home',
  SUPPORT = '/support',
  PLAN_DETAIL = '/plan-detail/:planId',
  PRINT_PLAN_DETAIL = '/plan-detail/:planId/print',
  EXPLORE = '/explore',
  ITINERARY_DETAILS_FORM = '/itinerary-details-form',
  CHECKLIST = '/checklist/:planId',
  EDIT_ITINERARY_DETAILS = '/itinerary-details-form/:planId',
  MAP_ANIMATED = '/map-animated/:id',
  LOGIN = '/login',
}

export enum routeAccess {
  PUBLIC = 'public',
  PRIVATE = 'private',
}
