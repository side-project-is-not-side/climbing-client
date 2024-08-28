import React from 'react';

import { TBaseDrawerProps } from './Base.types';
import { AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { useDialog } from '@/shared/hooks';

/**
 * @description
 * 기본 드로우어 컴포넌트입니다.
 * 단순 확인할 수 있는 기능과, 단계에 따라 특정 컨텐츠를 다르게 보여줄 수 있는 기능을 선택하여 커스터마이징할 수 있습니다.
 */
export function BaseDrawer({
  children,

  visible,
  maskClosable = false,

  title,

  onAfterOpen,
  onClose,
  onAction,
  actionText = '확인',
}: TBaseDrawerProps) {
  const { ref, portalTarget } = useDialog<HTMLDialogElement>({ visible, onAfterOpen, onClose, maskClosable });

  return portalTarget
    ? ReactDOM.createPortal(
        <LazyMotion features={domAnimation}>
          <AnimatePresence>
            {visible && (
              <div
                className="fixed inset-0 z-[99999] flex items-center justify-center w-full bg-grayscale-black bg-opacity-60"
                onClick={(e) => {
                  if (maskClosable && e.target === e.currentTarget) {
                    onClose?.();
                  }
                }}
              >
                <motion.dialog
                  key={visible ? 'drawer--open' : 'drawer--close'}
                  className={twMerge(
                    'fixed inset-x-0 bottom-0 flex-col w-full max-w-none px-5 pt-[10px] pb-5 mx-0 mb-0 border-none rounded-t-[20px] rounded-r-[20px] bg-grayscale-700',
                    visible ? 'flex' : 'hidden',
                  )}
                  ref={ref}
                  initial={{ y: '100%', opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: '100%', opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <div className="relative flex flex-1 flex-col overflow-hidden">
                    <h4 className="mt-10 w-full font-header-2 text-neutral-white">{title}</h4>

                    {children && <div>{children}</div>}
                  </div>

                  {onAction && <button type="button">{actionText}</button>}
                </motion.dialog>
              </div>
            )}
          </AnimatePresence>
        </LazyMotion>,
        portalTarget,
      )
    : null;
}
