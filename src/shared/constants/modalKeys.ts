export const ModalKeys = {
  로그아웃: '로그아웃',
  레벨설명: '레벨설명',
  회원탈퇴: '회원탈퇴',
} as const;

export type TKeys = keyof typeof ModalKeys;
