import React from 'react';

import { useModalContext } from '@/app';
import { Menu } from '@/entities/my';
import { ModalKeys } from '@/shared/constants';
import { WithdrawalModal } from '@/widgets';

export const WithdrawButton = () => {
  const { open } = useModalContext();

  const handleClick = () => {
    open(ModalKeys.회원탈퇴);
  };

  return (
    <>
      <Menu text="계정 삭제" onClick={handleClick} showIcon={false} />
      <WithdrawalModal />
    </>
  );
};
