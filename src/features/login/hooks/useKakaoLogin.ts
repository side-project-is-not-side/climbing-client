import { useState } from 'react';

import useSWR from 'swr';

const useKakaoLogin = () => {
  const option = `status=no, menubar=no, scrollbars=no, toolbar=no, resizable=no, width=500, height=800`;

  const [shouldFetch, setShouldFetch] = useState(false);

  const swr = useSWR(shouldFetch ? '/v1/oauth2/kakao/login-page' : null, {
    onSuccess(data) {
      window.open('https://' + data.link, '_blank', option);
      setShouldFetch(false);
    },
  });

  function fetch() {
    setShouldFetch(true);
  }

  return { fetch, ...swr };
};

export default useKakaoLogin;
