'use client';

import React from 'react';

import { useModalRegister } from '@/app/ModalContext';
import { ModalKeys } from '@/shared/constants';
import { useCheckFirstVisit, useToken } from '@/shared/hooks';
import { Modal } from '@/shared/ui';

const LogoutModal = () => {
  const { visible, close } = useModalRegister(ModalKeys.로그아웃);
  const { removeToken } = useToken();
  const { setIsFirstVisit } = useCheckFirstVisit();

  const handleLogout = () => {
    close();
    removeToken();
    setIsFirstVisit(true);
  };

  return (
    <Modal.NoContents
      visible={visible}
      title="로그아웃하시겠어요?"
      cancelText="취소하기"
      onCancel={close}
      onClose={close}
      onAction={handleLogout}
      actionText="로그아웃"
    />
  );
};

export default LogoutModal;
