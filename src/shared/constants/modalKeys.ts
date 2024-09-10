export const ModalKeys = {
  로그아웃: '로그아웃',
} as const;

export type TKeys = keyof typeof ModalKeys;
