import { ImageIcon } from '../types';

export const generateMarkerIcon = (isSelected: boolean): ImageIcon => {
  return {
    url: isSelected ? '/icons/marker-selected.svg' : '/icons/marker-default.svg',
  };
};
