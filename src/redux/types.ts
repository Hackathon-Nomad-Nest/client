import { ItineraryDetailsValues } from 'src/lib/types';

export interface IUser {
  data: {
    id: string;
    name: string;
    email: string;
    picture: string;
    given_name: string;
    family_name: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

export interface IItineraryPlan {
  data: ItineraryDetailsValues | null;
  isLoading: boolean;
  error: string | null;
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
