export const moveToChallengeDetail = (challengeId: number) => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({
      type: 'NAVIGATE',
      data: { isStack: true, parent: 'challenge', route: 'challenge_detail', challengeId },
    }),
  );
};
