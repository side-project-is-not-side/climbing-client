import React from 'react';

import * as Icons from './components';
import { HexColor, Size } from './types';

export type IconName = keyof typeof Icons;

export type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'name' | 'size' | 'color'> & {
  name: IconName;
  size?: Size;
  color?: HexColor;
};

export const Icon = ({ name, size = '24', color, ...props }: IconProps) => {
  console.log('color', color);
  const Component = Icons[name];

  return <Component width={`${size}px`} height={`${size}px`} color={color} {...props} />;
};
