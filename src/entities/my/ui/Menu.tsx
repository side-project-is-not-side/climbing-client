import React from 'react';

import { Icon } from '@/shared/icons';

type Props = {
  text: string;
  onClick: () => void;
  showIcon?: boolean;
};

export const Menu = ({ text, onClick, showIcon = true }: Props) => {
  return (
    <li className="flex justify-between py-4" onClick={onClick}>
      <span className="font-text-2 text-neutral-white">{text}</span>
      {showIcon && <Icon name="ArrowRight" color="#fff" />}
    </li>
  );
};
