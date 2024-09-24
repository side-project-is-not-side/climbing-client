export const RESULTS = Object.freeze({
  UNAVAILABLE: 'unavailable',
  BLOCKED: 'blocked',
  DENIED: 'denied',
  GRANTED: 'granted',
  LIMITED: 'limited',
} as const);

export type ResultMap = typeof RESULTS;

type Values<T extends object> = T[keyof T];
export type PermissionStatus = Values<ResultMap>;
