import { ActivityType } from '@/entities/challenges';

export const moveToChallengeDetail = (challengeId: number, activityType: ActivityType) => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({
      type: 'NAVIGATE',
      data: { isStack: true, parent: 'challenge_group', route: 'challenge_detail', challengeId, activityType },
    }),
  );
};

export const moveToExternalPage = (name: 'NOTICE' | 'TERMS' | 'POLICY') => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({
      type: 'NAVIGATE',
      data: { isStack: true, parent: 'my_group', route: 'external_page', name },
    }),
  );
};
