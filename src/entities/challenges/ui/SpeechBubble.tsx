import React from 'react';

function SpeechBubble({ message }: { message: string }) {
  return (
    <div className="relative flex items-center justify-center min-w-[300px] h-[60px] px-5 rounded-[20px] bg-[#ffffffcc] after:absolute after:w-0 after:h-0 after:bg-transparent after:-bottom-3 after:border-transparent after:border-l-[14px] after:border-l-transparent after:border-t-[12px] after:border-t-[#ffffffcc] after:border-r-[14px] after:border-r-transparent mb-2">
      <span className="text-primary-400 font-header-1 break-keep text-center font-cafeSurround">{message}</span>
    </div>
  );
}

export default SpeechBubble;
