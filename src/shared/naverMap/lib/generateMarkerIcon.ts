import { ImageIcon } from '../types';

export const generateMarkerIcon = (isSelected: boolean): ImageIcon => {
  return {
    url: isSelected ? '/images/marker-selected.png' : '/images/marker-default.png',
  };
};
