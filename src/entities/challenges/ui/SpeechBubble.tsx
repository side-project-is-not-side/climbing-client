import React from 'react';

function SpeechBubble({ message }: { message: string }) {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[60px] rounded-[20px] bg-grayscale-600 after:absolute after:w-0 after:h-0 after:bg-transparent after:-bottom-3 after:border-transparent after:border-l-[20px] after:border-l-transparent after:border-t-[20px] after:border-t-grayscale-600 after:border-r-[20px] after:border-r-transparent mb-2">
      <span className="text-primary-400 font-text-1">{message}</span>
    </div>
  );
}

export default SpeechBubble;
