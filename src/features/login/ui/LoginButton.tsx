import React, { ComponentPropsWithoutRef } from 'react';

import Image from 'next/image';

import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'button'> {
  iconName: 'apple' | 'google' | 'kakao' | 'naver';
}

const LoginButton = ({ iconName, children, className, ...props }: Props) => {
  return (
    <button
      className={twMerge(
        'font-text-1 h-[50px] rounded-[10px] w-full transition-colors bg-none text-white border-white border relative',
        className,
      )}
      {...props}
    >
      <Image
        src={`/icons/logo_${iconName}.svg`}
        alt={iconName}
        width={24}
        height={24}
        className="absolute -translate-y-3 top-1/2 left-6"
      />
      {children}
    </button>
  );
};

export default LoginButton;
