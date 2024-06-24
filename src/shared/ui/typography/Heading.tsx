import React, { ComponentPropsWithoutRef } from 'react';

import { twMerge } from 'tailwind-merge';

const Heading = ({ children, className, ...props }: ComponentPropsWithoutRef<'h1'>) => {
  return (
    <h1 className={twMerge('text-neutral-white font-display-1', className)} {...props}>
      {children}
    </h1>
  );
};

export default Heading;
