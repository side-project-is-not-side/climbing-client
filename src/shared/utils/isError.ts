import { Error } from '../types/error';

export function isError(obj: unknown): obj is Error {
  const isError = typeof obj === 'object' && obj !== null && 'error' in obj;
  return isError;
}
