'use client';

import React, { useEffect, useRef } from 'react';

import { useSearchParams } from 'next/navigation';

import { BoulderingGym } from '../api/getBoulderingGym';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

const useInfiniteScroll = () => {
  const observerContainerRef = useRef<HTMLUListElement | null>(null);
  const observerRef: React.MutableRefObject<IntersectionObserver | null> = React.useRef(null);

  const searchParams = useSearchParams();

  const category = searchParams.get('category') ?? 'schedule';

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;

    return `/api/bouldering-gym?category=${category}&page=${pageIndex}&size=20`;
  };

  const { data, setSize } = useSWRInfinite<BoulderingGym[]>(getKey, {
    revalidateFirstPage: false,
  });

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

  return { observerContainerRef, data, category };
};

export default useInfiniteScroll;
