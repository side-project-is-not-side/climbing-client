import { useState } from 'react';

import { useGetKakaoCode } from '../queries';

const useKakaoLogin = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  useGetKakaoCode({ shouldFetch, setShouldFetch });

  const handleLogin = () => {
    setShouldFetch(true);
  };

  return {
    fetch: handleLogin,
  };
};

export default useKakaoLogin;
