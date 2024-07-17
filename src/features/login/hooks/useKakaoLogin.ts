import { useState } from 'react';

import { useGetKakaoCode } from '../queries';

const useKakaoLogin = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const getCode = useGetKakaoCode({ shouldFetch, setShouldFetch });

  const handleLogin = () => {
    setShouldFetch(true);
  };

  return {
    fetch: handleLogin,
    isLoading: getCode.isLoading,
  };
};

export default useKakaoLogin;
