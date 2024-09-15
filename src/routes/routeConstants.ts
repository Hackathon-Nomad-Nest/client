export enum routes {
  HOME = '/home',
  SUPPORT = '/support',
  PLAN_DETAIL = '/plan-detail/:planId',
  PRINT_PLAN_DETAIL = '/plan-detail/:planId/print',
  EXPLORE = '/explore',
  ITINERARY_DETAILS_FORM = '/itinerary-details-form',
  EDIT_ITINERARY_DETAILS = '/itinerary-details-form/:planId',
  MAPANIMATED = '/map-animated'
}

export enum routeAccess {
  PUBLIC = 'public',
  PRIVATE = 'private',
}
