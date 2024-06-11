'use client';

import React, { PropsWithChildren, useEffect, useRef } from 'react';

import { OpenState } from '../types';
import { AnimatePresence, AnimationDefinition, DragHandlers, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

const createPortalRoot = () => {
  if (typeof window === 'undefined') return null;

  const drawerRoot = document.createElement('div');
  drawerRoot.setAttribute('id', 'drawer-root');

  return drawerRoot;
};

type Props = {
  openState: OpenState;
  onDragEnd: DragHandlers['onDragEnd'];
  onAnimationComplete?: (definition: AnimationDefinition) => void;
};

function Drawer({ openState, onDragEnd, onAnimationComplete, children }: PropsWithChildren<Props>) {
  const portalRootRef = useRef<HTMLDivElement>(
    (document?.getElementById('drawer-root') as HTMLDivElement) ?? createPortalRoot(),
  );

  const bodyRef = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    bodyRef.current = document?.querySelector('body');

    if (bodyRef.current) {
      const portal = portalRootRef.current!;
      bodyRef.current.appendChild(portal);
    }
  }, []);

  const animationProps = {
    close: { animate: { height: '124px' } },
    'half-open': { animate: { height: '420px' } },
    'full-open': {
      animate: { height: 'calc(100% - 60px)' },
    },
  };

  return createPortal(
    <AnimatePresence>
      {openState !== 'close' && <div id="drawer-background" className="fixed inset-0 w-full h-full z-0" />}
      <motion.div
        id={openState}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={onDragEnd}
        onAnimationComplete={onAnimationComplete}
        dragElastic={0}
        className={twMerge('fixed left-0 rounded-t-[10px] bg-neutral-800 w-full bottom-0 z-10 h-[124px]')}
        {...animationProps[openState]}
        transition={{ ease: 'easeInOut' }}
      >
        <motion.button type="button" className="py-5 w-full flex justify-center">
          <div className="w-[60px] h-1 rounded-[4px] bg-[#4E4E4E]" />
        </motion.button>

        <div className={twMerge('px-5 pb-[100px]', openState === 'full-open' && 'h-full overflow-y-auto')}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>,
    portalRootRef.current,
  );
}

export default Drawer;