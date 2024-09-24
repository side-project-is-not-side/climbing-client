'use client';

import React from 'react';

import { useModalRegister } from '@/app/ModalContext';
import { useWithdrawal } from '@/features/auth';
import { ModalKeys } from '@/shared/constants';
import { Modal } from '@/shared/ui';

const WithdrawalModal = () => {
  const { visible, close } = useModalRegister(ModalKeys.회원탈퇴);

  const { handleWithdrawal } = useWithdrawal();

  return (
    <Modal.NoContents
      visible={visible}
      title="계정을 삭제하시겠어요?"
      descriptions={['모든 정보가 삭제됩니다.', '이 작업은 취소할 수 없습니다.']}
      cancelText="취소하기"
      onCancel={close}
      onClose={close}
      onAction={handleWithdrawal}
      actionText="탈퇴하기"
    />
  );
};

export default WithdrawalModal;
