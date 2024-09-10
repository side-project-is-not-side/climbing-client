'use client';

import { Maskable, TCloseController } from './types';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import ReactDOM from 'react-dom';

export type TModalBackground = {
  visible: boolean;
  portalTarget?: HTMLElement | null;
  onClose?: TCloseController['onClose'];
  maskClosable?: Maskable['maskClosable'];
} & React.PropsWithChildren;
export default function ModalBackground({ visible, portalTarget, children, onClose, maskClosable }: TModalBackground) {
  return portalTarget
    ? ReactDOM.createPortal(
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {visible && (
              <div
                className="fixed inset-0 z-[9999] h-full flex items-center justify-center w-full bg-[#000000b3]"
                onClick={(e) => {
                  if (maskClosable && e.target === e.currentTarget) {
                    onClose?.();
                  }
                }}
              >
                {children}
              </div>
            )}
          </AnimatePresence>
        </LazyMotion>,
        portalTarget,
      )
    : null;
}
