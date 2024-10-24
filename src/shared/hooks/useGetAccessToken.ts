import { useEffect, useState } from 'react';

export function useGetAccessToken() {
  const [token, setToken] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const accessToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken='))
      ?.split('=')[1];

    setToken(accessToken);
    setIsLoading(false);
    // window.ReactNativeWebView?.postMessage?.(JSON.stringify({ type: 'CONSOLE_LOG', data: accessToken }));
  }, []);
  return { token, isLoading };
}
