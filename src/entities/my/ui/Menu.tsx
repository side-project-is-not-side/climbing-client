import React from 'react';

import { Icon } from '@/shared/icons';

type Props = {
  text: string;
  onClick: () => void;
};

export const Menu = ({ text, onClick }: Props) => {
  return (
    <li className="flex justify-between py-4" onClick={onClick}>
      <span className="font-text-2 text-neutral-white">{text}</span>
      <Icon name="ArrowRight" color="#fff" />
    </li>
  );
};
