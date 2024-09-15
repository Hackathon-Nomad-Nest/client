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