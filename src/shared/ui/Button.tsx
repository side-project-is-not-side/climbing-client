import React, { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        ' font-header-2 h-[50px] rounded-3xl w-full transition-colors bg-primary-400 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
