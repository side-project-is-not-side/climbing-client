import React from 'react';

import preventBackgroundScroll from '../utils/preventBackgroundScroll';

/* eslint-disable import/prefer-default-export */

/**
 * @description
 * 모달을 켤 때, body의 스크롤이 제어되지 않는 현상을 해결합니다.
 * 이 코드는 Android, IOS 모두 작동합니다.
 * 전달 받은 파라미터가 truthy할 때는 스크롤을 제어하고, 그렇지 않다면 스크롤 제어를 해제합니다.
 */
export const useBodyScrollHidden = (shouldBodyScrollBlock: boolean) => {
  const scrollPosition = React.useRef(0);

  React.useEffect(() => {
    if (shouldBodyScrollBlock) {
      scrollPosition.current = window.pageYOffset;

      preventBackgroundScroll.enable(document.body, scrollPosition.current);
    } else {
      preventBackgroundScroll.disable(document.body);
    }

    return () => {
      preventBackgroundScroll.disable(document.body);
    };
  }, [shouldBodyScrollBlock]);
};
