import React from 'react';

import { ModalButtonGroup } from '../ButtonGroup';
import ModalBackground from '../ModalBackground';
import { TCommonModalProps } from '../common/common.types';
import { Scrollable } from '../types';
import Style from './ContentsModal.style';
import { useScreen } from 'usehooks-ts';

import { useDialog } from '@/shared/hooks';

export type TContentsModalProps = TCommonModalProps & Required<React.PropsWithChildren> & Scrollable;

/* eslint-disable-next-line import/prefer-default-export */
const ContentsModal = React.forwardRef<HTMLDialogElement, TContentsModalProps>(function ContentsAreaModal(
  {
    visible,

    width,

    height,
    borderRadius,

    title,
    descriptions = [],

    children,

    onAction,
    onCancel,
    onClose,

    actionText = '확인',
    cancelText,

    actionDisabled = false,
    scrollable = false,
  },
  ref,
) {
  const { height: screenHeight } = useScreen();

  return (
    <Style.Container
      ref={ref}
      visible={visible}
      width={width}
      height={height ?? `${(screenHeight ?? 0) * 0.6}px`}
      borderRadius={borderRadius}
    >
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

      <Style.ContentsContainer scrollable={scrollable}>{children}</Style.ContentsContainer>

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

/**
 * @description
 * 콘텐츠가 있는 모달입니다.
 *
 * @param {visible} boolean 현재 모달의 상태를 정의합니다.
 *
 * @param {titles} array 제목을 입력합니다. 배열로 여러 줄을 받을 수 있습니다.
 * @param {descriptions} array 글을 입력합니다. 배열로 여러 줄을 받을 수 있습니다.
 *
 * @param {onAfterOpen} function 만약 열었을 때 바로 무언가를 동작시킬 때 사용합니다.
 * @param {onCancel} function 유저가 해당 내용에 대해 취소하고 모달을 종료하고 싶을 때 호출될 함수를 지정할 수 있습니다.
 * @param {onAction} function 유저가 해당 내용을 인지하고 확인 시 호출될 함수를 지정할 수 있습니다.
 *
 * @param {actionText} string 버튼에 대한 라벨을 지정합니다.
 * @param {cancelText} string 버튼에 대한 라벨을 지정합니다.
 *
 * @param {children} ReactNode 콘텐츠를 `children`의 형태로 넣을 수 있습니다.
 */
export function Contents({
  visible,

  width,
  height,
  borderRadius,
  maskClosable = false,
  scrollable = false,
  title,
  descriptions = [],
  onAfterOpen,
  onAction,
  onCancel,
  onClose,
  actionText,
  cancelText,
  actionDisabled,

  children,
}: TContentsModalProps) {
  const { ref, portalTarget } = useDialog<HTMLDialogElement>({ visible, onAfterOpen, onClose, maskClosable });

  return (
    <ModalBackground visible={visible} portalTarget={portalTarget} onClose={onClose} maskClosable={maskClosable}>
      <ContentsModal
        ref={ref}
        width={width}
        height={height}
        borderRadius={borderRadius}
        key={visible ? 'modal--open' : 'modal--close'}
        visible={visible}
        scrollable={scrollable}
        title={title}
        descriptions={descriptions}
        onAction={onAction}
        onCancel={onCancel}
        onClose={onClose}
        actionText={actionText}
        cancelText={cancelText}
        actionDisabled={actionDisabled}
      >
        {children}
      </ContentsModal>
    </ModalBackground>
  );
}
