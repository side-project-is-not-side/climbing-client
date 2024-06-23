import { useEffect, useRef } from 'react';

import { SWRInfiniteResponse } from 'swr/infinite';

type Props<T> = {
  queryFn: () => SWRInfiniteResponse<T>;
  options?: IntersectionObserverInit;
};

export const useInfiniteScroll = <T>({ queryFn, options }: Props<T>) => {
  const observerContainerRef = useRef<HTMLUListElement>(null);
  const observerRef: React.MutableRefObject<IntersectionObserver | null> = useRef(null);

  const { data, setSize } = queryFn();

  useEffect(() => {
    if (!observerContainerRef.current) {
      return;
    }

    if (observerContainerRef.current.children.length === 0) {
      return;
    }

    observerRef.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return;

      setSize((prev) => prev + 1);

      observer.unobserve(entries[0].target);
    }, options);

    const observerIndex = Math.floor((observerContainerRef.current.children.length * 2) / 3);
    observerRef.current.observe(observerContainerRef.current.children[observerIndex]);
  }, [data, setSize]);

  return { observerContainerRef, data };
};
