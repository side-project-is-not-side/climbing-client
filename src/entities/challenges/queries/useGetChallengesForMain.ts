'use client';

import { useGetChallengesByStatus } from './useGetChallengesByStatus';

export const useGetChallengesForMain = () => {
  const { data: ongoing, isLoading: isOngoingChallengesLoading } = useGetChallengesByStatus('ONGOING');
  const { data: success, isLoading: isSuccessChallengesLoading } = useGetChallengesByStatus('SUCCESS');

  const ongoingChallenges = ongoing?.length ? ongoing?.slice(0, 4) : [];
  const successChallenges = success?.length ? success?.slice(0, 4) : [];

  const isLoading = isOngoingChallengesLoading || isSuccessChallengesLoading;
  const isChallengeStarted = !!ongoingChallenges.length || !!successChallenges.length;

  return {
    ongoingChallenges,
    successChallenges,
    isLoading,
    isChallengeStarted,
  };
};
