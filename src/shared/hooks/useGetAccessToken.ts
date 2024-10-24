import { useEffect, useState } from 'react';

export function useGetAccessToken() {
  const [token, setToken] = useState<string>();
  useEffect(() => {
    const cookies = document.cookie.split(';');
    const accessToken = cookies.find((cookie) => cookie.trim().startsWith('accessToken='))?.split('=')[1];
    setToken(accessToken);
  }, []);

  return token;
}
