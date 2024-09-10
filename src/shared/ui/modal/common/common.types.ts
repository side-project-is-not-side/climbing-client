import { Maskable, TActionController, TCancelController, TEventAspects } from '../types';

export type TLayout = {
  width?: string;
  height?: string;
  borderRadius?: string;
};

export type TActionButton = {
  actionText?: string;
  actionDisabled?: boolean;
} & TActionController &
  TCancelController;

export type TModalButtonGroupProps = {
  cancelText?: string;
} & TActionButton &
  TCancelController;

export type TCommonModalProps = {
  title?: string;
  descriptions?: string[];
  cancelText?: string;
} & Maskable &
  TEventAspects &
  TActionButton &
  TLayout;
