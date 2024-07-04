import { useEffect, useState } from 'react';

import useSWR from 'swr';

const useKakaoLogin = () => {
  const [screenSize, setScreenSize] = useState({ top: 0, left: 0 });
  const [shouldFetch, setShouldFetch] = useState(false);

  const option = `status=no, menubar=no, scrollbars=no, toolbar=no, resizable=no, width=500, height=800, left=${screenSize.left}, top=${screenSize.top}`;

  const swr = useSWR(shouldFetch ? '/v1/oauth2/kakao/login-page' : null, {
    onSuccess(data) {
      window.open('https://' + data.link, '_blank', option);
      setShouldFetch(false);
    },
  });

  function fetch() {
    setShouldFetch(true);
  }

  useEffect(() => {
    if (screen) {
      const left = screen.width / 2 - 500 / 2;
      const top = screen.height / 2 - 800 / 2;

      setScreenSize({ top, left });
    }
  }, []);

  return { fetch, ...swr };
};

export default useKakaoLogin;
