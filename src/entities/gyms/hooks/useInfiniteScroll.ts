import { useEffect, useRef } from 'react';

import { useGetGymsByLocation } from '@/features/gyms/queries/useGetGymsByLocation';

export const useInfiniteScroll = () => {
  const observerContainerRef = useRef<HTMLUListElement>(null);
  const observerRef: React.MutableRefObject<IntersectionObserver | null> = useRef(null);

  const { data, setSize } = useGetGymsByLocation();

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
    });

    const observerIndex = Math.floor((observerContainerRef.current.children.length * 2) / 3);
    observerRef.current.observe(observerContainerRef.current.children[observerIndex]);
  }, [data, setSize]);

  return { observerContainerRef, data };
};
