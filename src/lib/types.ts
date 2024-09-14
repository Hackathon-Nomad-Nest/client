import { FC } from 'react';

export interface IRoutesConfigType {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: FC<any>;
  layout: string;
  isFooter?: boolean;
  isHeader?: boolean;
}