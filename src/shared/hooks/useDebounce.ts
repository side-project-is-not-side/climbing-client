import React from 'react';

export const useDebounce = (callback: () => void, delay: number) => {
  const timer = React.useRef<ReturnType<typeof setTimeout>>();

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, delay);

    timer.current = newTimer;
  };
  return dispatchDebounce;
};
