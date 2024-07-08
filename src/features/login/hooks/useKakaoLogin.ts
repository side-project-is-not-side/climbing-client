import { useState } from 'react';



import { useGetKakaoCode } from '../queries';

const useKakaoLogin = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const getCode = useGetKakaoCode({ shouldFetch, setShouldFetch });

  return {
    fetch: () => {
      setShouldFetch(true);
    },
    isLoading: getCode.isLoading,
  };
};

export default useKakaoLogin;