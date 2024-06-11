import { useEffect, useState } from 'react';

import { OpenState } from '../types';
import { DragHandlers } from 'framer-motion';

type Props = {
  defaultOpenState: OpenState;
  onClose?: () => void;
};
export const useDrawer = ({ defaultOpenState, onClose }: Props) => {
  const [openState, setOpenState] = useState<OpenState>(defaultOpenState);

  const increaseOpenState = () => {
    switch (openState) {
      case 'close':
        setOpenState('half-open');
        break;
      case 'half-open':
        setOpenState('full-open');
        break;
      default:
        return;
    }
  };

  const decreaseOpenState = () => {
    switch (openState) {
      case 'full-open':
        setOpenState('half-open');
        break;
      case 'half-open':
        setOpenState('close');
        break;
      default:
        return;
    }
  };

  const onDragEnd: DragHandlers['onDragEnd'] = (event, info) => {
    if (info.offset.y < -80) {
      increaseOpenState();
      return;
    }

    if (info.offset.y > 80) {
      decreaseOpenState();
    }
  };

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLDivElement)) return;

      const { id } = event.target;
      if (id !== 'drawer-background') return;

      decreaseOpenState();
      onClose?.();
    };

    if (openState === 'half-open') {
      document.addEventListener('click', onDocumentClick);
    }

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [openState]);

  return { openState, increaseOpenState, decreaseOpenState, onDragEnd };
};
