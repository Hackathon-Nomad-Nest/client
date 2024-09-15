export interface ITripDetails {
  start_date: string;
  end_date: string;
  origin: string;
  destination: string;
  budget: number;
  adults: number;
  kids: number;
  pets: boolean;
}

export interface IDeparture {
  mode: string;
  station: string;
  time: string;
  train_name: string;
  arrival_station: string;
  arrival_time: string;
  price?: number;
  class: string;
  description: string;
}

export interface ICheckInDetails {
  hotel: string;
  price_per_night: string;
  total_cost: number;
  location: string;
  description: string;
  price?: number;
  time?: string;
}

export interface ICheckOutDetails {
  hotel: string;
  location_latitude: string;
  location_longitude: string;
  checkout_time: string;
  description: string;
  price?: number;
  time?: string;
}

export interface IActivity {
  activity: string;
  description: string;
  price: string;
  time?: string;
}

export interface IFoodInfo {
  restaurant: string;
  price: string;
  famous_dishes: string[];
  location: string;
  description: string;
  time?: string;
}

export interface IDayPlan {
  departure?: IDeparture;
  check_in?: ICheckInDetails;
  morning_activity?: IActivity;
  afternoon_activity?: IActivity;
  evening_activity?: IActivity;
  breakfast?: IFoodInfo;
  lunch?: IFoodInfo;
  dinner?: IFoodInfo;
  check_out?: ICheckOutDetails;
}

export interface ITrip {
  trip_details: ITripDetails;
  travel_plan: Record<string, IDayPlan>;
}

export interface ITPlan {
  budget: string,
  to: string,
  from: string,
  adults: string,
  kids: string,
  numberOfDays: string,
  id: string,
}