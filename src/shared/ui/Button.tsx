import React, { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, ...props }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className={twMerge(
        ' font-header-2 h-[50px] rounded-3xl w-full transition-colors',
        props.disabled ? 'bg-grayscale-600 text-neutral-400' : 'bg-primary-400 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
