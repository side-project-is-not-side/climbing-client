import { useState } from 'react';

import { useGetKakaoCode, useGetKakaoToken } from '../queries';

const useKakaoLogin = () => {
  const [code, setCode] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  const getCode = useGetKakaoCode({ enabled, setEnabled, setCode });
  const getToken = useGetKakaoToken({ code, setCode });

  return {
    fetch: () => {
      setEnabled(true);
    },
    isLoading: getCode.isLoading || getToken.isLoading,
  };
};

export default useKakaoLogin;
