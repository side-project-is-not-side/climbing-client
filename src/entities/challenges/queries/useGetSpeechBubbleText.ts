'use client';

import useSWR from 'swr';

const ENDPOINT = '/v1/speech-bubbles/recommend';
export const useGetSpeechBubbleText = () => {
  const { data, mutate: refetch } = useSWR<{ message: string }>(ENDPOINT, {
    revalidateOnFocus: false,
    suspense: false,
  });

  const getBubbleText = () => refetch();

  return { message: data?.message ?? '', getBubbleText };
};
