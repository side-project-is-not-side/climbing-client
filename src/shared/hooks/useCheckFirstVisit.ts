'use client';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'isFirstVisit';

export const useCheckFirstVisit = () => {
  const [data, setData] = useLocalStorage(KEY, 'true');

  const isFirstVisit: boolean = data ? JSON.parse(data) : true;

  const setIsFirstVisit = (IsFirstVisit: boolean) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'STORAGE_DATA', data: { key: KEY, data: IsFirstVisit } }),
      );
    }
    setData(JSON.stringify(IsFirstVisit));
  };

  return { isFirstVisit, setIsFirstVisit };
};
