'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

function SpeechBubble({ showBubble, message }: { showBubble: boolean; message: string }) {
  return (
    <AnimatePresence>
      {showBubble && (
        <motion.div
          className="relative flex items-center justify-center min-w-[300px] h-[60px] px-7 rounded-[20px] bg-[#ffffffcc] after:absolute after:w-0 after:h-0 after:bg-transparent after:-bottom-3 after:border-transparent after:border-l-[14px] after:border-l-transparent after:border-t-[12px] after:border-t-[#ffffffcc] after:border-r-[14px] after:border-r-transparent mb-2"
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { type: 'spring', duration: 0.2, stiffness: 200 },
          }}
          exit={{
            y: 10,
            opacity: 0,
          }}
        >
          <span className="text-primary-400 font-header-1 break-keep text-center font-cafeSurround">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SpeechBubble;
