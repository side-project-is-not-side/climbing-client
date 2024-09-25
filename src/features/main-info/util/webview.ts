export const moveToChallengeDetail = (challengeId: number) => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({ type: 'NAVIGATE', data: { route: 'challenge_detail', challengeId } }),
  );
};
