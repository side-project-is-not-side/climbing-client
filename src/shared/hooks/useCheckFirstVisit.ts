'use client';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'IsFirstVisit';

export const useCheckFirstVisit = () => {
  const [data, setData] = useLocalStorage(KEY, 'true');

  const isFirstVisit: boolean = JSON.parse(data);

  const setIsFirstVisit = (IsFirstVisit: boolean) => {
    if(window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({type: 'STORAGE_DATA', data: {key: KEY, data: IsFirstVisit}}));
    }
    setData(JSON.stringify(IsFirstVisit));
  };

  return { isFirstVisit, setIsFirstVisit };
};
