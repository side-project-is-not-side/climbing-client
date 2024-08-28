import React from 'react';

import { TCloseController } from '../drawer/types';
import { useBodyScrollHidden } from './useBodyScrollHidden';

export type TUseDialogParams = {
  visible: boolean;
  onClose?: TCloseController['onClose'];
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
  maskClosable: boolean;
};

/* eslint-disable-next-line import/prefer-default-export */
export const useDialog = <TRef extends HTMLElement>({
  visible,
  onAfterOpen,
  onClose,
  maskClosable,
}: TUseDialogParams) => {
  const [portalTarget, setPortalTarget] = React.useState<HTMLElement | null>(null);

  const ref = React.useRef<TRef | null>(null);

  useBodyScrollHidden(visible);

  /* Dialog를 놓을 위치를 정하기 위한 rootElement를 마운트 시 추가한다. */
  React.useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  /* Dialog에 관한 이벤트 리스너를 정의한다. */
  React.useEffect(() => {
    if (!ref.current) return;

    function closeModalByESCHandler(e: KeyboardEvent) {
      if (maskClosable && e.key === 'Escape' && visible && onClose) {
        onClose(e);
      }
    }

    /* 버튼으로 제어할 경우 visible 속성에 따라 실행할 함수들을 정의합니다. */
    if (visible) {
      onAfterOpen?.();
    }

    window.addEventListener('keydown', closeModalByESCHandler);

    return () => {
      window.removeEventListener('keydown', closeModalByESCHandler);
    };
  }, [visible, ref]);

  return {
    ref,
    portalTarget,
  };
};
