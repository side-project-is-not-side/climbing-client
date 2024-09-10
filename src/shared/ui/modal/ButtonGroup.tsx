'use client';

import { CSSProperties, PropsWithChildren } from 'react';

import { TModalButtonGroupProps } from './common/common.types';
import { ButtonType } from './types';
import { twMerge } from 'tailwind-merge';

export type TModalButtonProps = {
  type: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
} & CSSProperties;

export function ModalButton({
  type = 'button',
  onClick,
  disabled,
  children,
  className,
}: PropsWithChildren<TModalButtonProps>) {
  return (
    <button
      className={twMerge('flex-1 h-[50px] flex justify-center items-center', className)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export function ModalButtonGroup({
  onAction,
  onCancel,
  actionText,
  cancelText,
  actionDisabled,
}: TModalButtonGroupProps) {
  const isFullWidth = !cancelText;

  return (
    <div className="flex w-full border-t-[1px] border-solid border-grayscale-600">
      {cancelText && (
        <ModalButton type="button" onClick={onCancel} className="text-sm text-neutral-white font-normal">
          {cancelText}
        </ModalButton>
      )}

      {!!cancelText && !!actionText && <div className="h-[50px] w-[1px] bg-grayscale-600" />}

      {onAction && actionText && (
        <ModalButton
          type="button"
          className="font-header-3 text-red-400"
          onClick={onAction}
          width={isFullWidth ? '100%' : 'calc(100%/2)'}
          disabled={actionDisabled}
        >
          {actionText}
        </ModalButton>
      )}
    </div>
  );
}
