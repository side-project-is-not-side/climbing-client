'use client';

import useSWR from 'swr';

const ENDPOINT = '/v1/speech-bubbles/recommend';
export const useGetSpeechBubbleText = () => {
  const { data, mutate: refetch } = useSWR<{ message: string }>(ENDPOINT, {
    revalidateOnFocus: false,
  });

  const onCharacterClick = () => refetch();

  return { message: data?.message ?? '', onCharacterClick };
};
