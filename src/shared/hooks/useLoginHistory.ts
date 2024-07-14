'use client';

import { useLocalStorage } from 'usehooks-ts';

const KEY = 'IsFirstVisit';

export const useCheckFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage(KEY, 'true');

  const parsedIsFirstVisit: boolean = JSON.parse(isFirstVisit);

  const stringifyFirstVisitYn = (IsFirstVisit: boolean) => {
    setIsFirstVisit(JSON.stringify(IsFirstVisit));
  };

  return { isFirstVisit: parsedIsFirstVisit, setIsFirstVisit: stringifyFirstVisitYn };
};
