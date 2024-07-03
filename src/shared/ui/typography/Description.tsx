import React, { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

const Description = ({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) => {
  return (
    <p className={twMerge('text-grayscale-400 font-text-1', className)} {...props}>
      {children}
    </p>
  );
};

export default Description;
