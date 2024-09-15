import { FC } from 'react';

export interface IRoutesConfigType {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FC<any>;
  layout: string;
  isFooter?: boolean;
  isHeader?: boolean;
}

export interface IFaq {
  question: string;
  answer: string;
}

export enum TripTypes {
  relaxing = 'relaxing',
  adventurous = 'adventurous',
  religious = 'religious',
  family = 'family',
  cultural = 'cultural',
  nightLife = 'night-life',
}

export enum TravelMode {
  personalVehicle = 'personal-vehicle',
  train = 'train',
  bus = 'bus',
  flight = 'flight',
}

export interface ItineraryDetailsFormValues {
  to: string;
  from: string;
  budget: string;
  startDate: Date;
  adults: number;
  kids: number;
  tripType: TripTypes;
  numberOfDays: number;
  preferredTravelMode: TravelMode;
}

export interface ItineraryDetailsValues extends ItineraryDetailsFormValues {
  id: string;
}

export interface IApproachStep {
  stepNo: number;
  title: string;
  description: string;
}

export interface IMusicCard {
  name: string;
  artist: string;
  details?: string;
}
