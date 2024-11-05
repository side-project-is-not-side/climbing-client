import { ActivityType } from '@/entities/challenges';

export const moveToChallengeDetail = (challengeId: number, activityType: ActivityType) => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({
      type: 'NAVIGATE',
      data: { route: 'challenge_detail', challengeId, activityType },
    }),
  );
};
