export type ButtonType = 'button' | 'submit' | 'reset';

export type TEventAspects = {
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};

export type TCloseController = {
  onClose: (e?: MouseEvent | TouchEvent | KeyboardEvent) => void;
};

export type TCancelController = {
  onCancel?: (e?: MouseEvent | TouchEvent | KeyboardEvent) => void;
};

export type TActionController = {
  onAction: () => void;
};

export type Maskable = {
  visible: boolean;
  maskClosable?: boolean;
} & TCloseController;

export type Scrollable = {
  scrollable?: boolean;
};

export type TCommonModalProps = Maskable & TEventAspects & TActionController;
