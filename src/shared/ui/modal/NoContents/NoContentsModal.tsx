'use client';

import React from 'react';

import { ModalButtonGroup } from '../ButtonGroup';
import ModalBackground from '../ModalBackground';
import { modalAnimation } from '../animation';
import { TCommonModalProps } from '../common/common.types';
import Style from './style';
import { m } from 'framer-motion';

import { useDialog } from '@/shared/hooks';

export type TNoContentsModalProps = TCommonModalProps;

export const NoContentsModal = React.forwardRef<HTMLDialogElement, TNoContentsModalProps>(function ContentsAreaModal(
  {
    visible,

    width,
    height,
    borderRadius,

    title,
    descriptions = [],
    onAction,
    onClose,
    onCancel,
    actionText,
    cancelText,
    actionDisabled,
  },
  ref,
) {
  return (
    <Style.Container visible={visible} key="modal" ref={ref} width={width} height={height} borderRadius={borderRadius}>
      <Style.Details>
        {title && <Style.Title>{title}</Style.Title>}

        {!!descriptions.length && (
          <Style.DescriptionContainer>
            {descriptions.map((description, index) => (
              <Style.Description key={index}>{description}</Style.Description>
            ))}
          </Style.DescriptionContainer>
        )}
      </Style.Details>

      <ModalButtonGroup
        onAction={onAction}
        onCancel={onCancel ?? onClose}
        actionText={actionText}
        cancelText={cancelText}
        actionDisabled={actionDisabled}
      />
    </Style.Container>
  );
});

const NoContentsModalWithMotion = m(NoContentsModal, { forwardMotionProps: true });

/**
 * @description
 * 콘텐츠가 없는 모달입니다.
 *
 * @param {visible} boolean 현재 모달의 상태를 정의합니다.
 *
 * @param {title} array 제목을 입력합니다. 배열로 여러 줄을 받을 수 있습니다.
 * @param {descriptions} array 글을 입력합니다. 배열로 여러 줄을 받을 수 있습니다.
 *
 * @param {onAfterOpen} function 만약 열었을 때 바로 무언가를 동작시킬 때 사용합니다.
 * @param {onCancel} function 유저가 해당 내용에 대해 취소하고 모달을 종료하고 싶을 때 호출될 함수를 지정할 수 있습니다.
 * @param {onAction} function 유저가 해당 내용을 인지하고 확인 시 호출될 함수를 지정할 수 있습니다.
 *
 * @param {actionText} string 버튼에 대한 라벨을 지정합니다.
 * @param {cancelText} string 버튼에 대한 라벨을 지정합니다. 해당 텍스트를 넣지 않는다면 Action 하나만 280px의 크기로 나옵니다.
 */
export function NoContents({
  visible,

  width,
  height,
  borderRadius,

  maskClosable = false,
  title,
  descriptions = [],
  onAfterOpen,
  onAction,
  onClose,
  onCancel,
  actionText = '확인',
  cancelText,
  actionDisabled,
}: TNoContentsModalProps) {
  const { ref, portalTarget } = useDialog<HTMLDialogElement>({ visible, onAfterOpen, onClose, maskClosable });

  return (
    <ModalBackground visible={visible} portalTarget={portalTarget} onClose={onClose} maskClosable={maskClosable}>
      <NoContentsModalWithMotion
        ref={ref}
        key={visible ? 'modal--open' : 'modal--close'}
        visible={visible}
        width={width}
        height={height}
        borderRadius={borderRadius}
        title={title}
        descriptions={descriptions}
        // animation
        initial={modalAnimation.initial}
        animate={modalAnimation.animate}
        exit={modalAnimation.exit}
        transition={modalAnimation.transition}
        onAction={onAction}
        onCancel={onCancel}
        onClose={onClose}
        actionText={actionText}
        cancelText={cancelText}
        actionDisabled={actionDisabled}
      />
    </ModalBackground>
  );
}
