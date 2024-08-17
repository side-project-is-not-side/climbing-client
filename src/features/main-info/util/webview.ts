export const moveToChallengeDetail = (id: number) => {
  window.ReactNativeWebView?.postMessage?.(
    JSON.stringify({ type: 'NAVIGATE', data: { route: 'challenge_detail', id } }),
  );
};
