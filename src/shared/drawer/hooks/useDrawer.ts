import { useState } from 'react';

import { OpenState } from '../types';
import { DragHandlers } from 'framer-motion';

type Props = {
  defaultOpenState: OpenState;
};
export const useDrawer = ({ defaultOpenState }: Props) => {
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

  return { openState, increaseOpenState, decreaseOpenState, onDragEnd };
};
