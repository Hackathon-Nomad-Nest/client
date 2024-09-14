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
    price: number;
    class: string;
    description: string;
}

export interface ICheckInDetails {
    hotel: string;
    price_per_night: string;
    total_cost: number;
    location: string;
    description: string;
}

export interface IActivity {
    activity: string;
    description: string;
    price: string;
}

export interface IFoodInfo {
    restaurant: string;
    price: string;
    famous_dishes: string[];
    location: string;
    description: string;
}

export interface IDayPlan {
    departure: IDeparture;
    check_in?: ICheckInDetails;
    morning_activity?: IActivity;
    afternoon_activity?: IActivity;
    evening_activity?: IActivity;
    breakfast?: IFoodInfo;
    lunch?: IFoodInfo;
    dinner?: IFoodInfo;
}

export interface ITrip {
   trip_details: ITripDetails;
   travel_plan: Record<string,IDayPlan>
}