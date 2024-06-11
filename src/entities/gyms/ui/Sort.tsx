import React from 'react';

import { Icon } from '@/shared/icons';

// TODO: 추후 정렬기준 추가되면 UI 및 props 추가
function Sort() {
  return (
    <button type="button" className="flex gap-1 items-center py-1 px-4 rounded-[50px] bg-grayscale-600 mb-5">
      <span className="text-[13px] text-neutral-white">내위치중심</span>
      <Icon name="DropdownArrow" />
    </button>
  );
}

export default Sort;
