import { Maskable, Scrollable, TActionButton, TEventAspects } from '../types';

export type TBaseDrawerProps = {
  title?: string;
  titleStyle?: 'left' | 'center';
  showCloseButton?: boolean;
} & Maskable &
  TActionButton &
  Scrollable &
  TEventAspects &
  React.PropsWithChildren;
