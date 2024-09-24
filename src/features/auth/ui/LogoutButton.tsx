import React from 'react';

import { useModalContext } from '@/app';
import { Menu } from '@/entities/my';
import { ModalKeys } from '@/shared/constants';
import { LogoutModal } from '@/widgets';

export const LogoutButton = () => {
  const { open } = useModalContext();

  const handleClick = () => {
    open(ModalKeys.로그아웃);
  };
  return (
    <>
      <Menu text="로그아웃" onClick={handleClick} showIcon={false} />
      <LogoutModal />
    </>
  );
};
