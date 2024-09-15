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

export interface ISummary {
  total_food_cost: number;
  total_stay_cost: number;
  total_transportation_cost: number;
  total_activity_cost: number;
  total_entry_fee: number;
  total_trip_cost: number;
  description: {
    total_food_cost: string;
    total_stay_cost: string;
    total_transportation_cost: string;
    total_activity_cost: string;
    total_entry_fee: string;
    total_trip_cost: string;
  };
}

export interface ITrip {
  trip_details: ITripDetails;
  travel_plan: Record<string, IDayPlan>;
  cost_summary: ISummary;
  essentials_to_carry: Record<string, string[]>;
}

export interface ITPlan {
  budget: string;
  to: string;
  from: string;
  adults: string;
  kids: string;
  numberOfDays: string;
  id: string;
}
