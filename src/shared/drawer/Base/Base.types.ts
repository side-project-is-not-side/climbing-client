import { Maskable, Scrollable, TActionButton, TEventAspects } from '../types';

export type TBaseDrawerProps = {
  title?: string;
} & Maskable &
  TActionButton &
  Scrollable &
  TEventAspects &
  React.PropsWithChildren;
