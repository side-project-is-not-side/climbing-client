type Props = {
  url?: string | URL | undefined;
  target?: string | undefined;
  features?: string | undefined;
  onClose?: (popup: Window) => void;
};

export const openPopup = ({ url, target = '_blank', features, onClose = () => {} }: Props) => {
  // 팝업 호출
  const popup = window.open(url, target, features);

  // 팝업 차단 알림
  if (!popup || popup.closed || typeof popup.closed == 'undefined') {
    alert('팝업 차단이 감지되었습니다. 팝업 차단을 해제해 주세요.');
  }

  // 팝업이 닫힘상태 감지
  if (popup) {
    const interval = window.setInterval(() => {
      try {
        if (popup.closed) {
          window.clearInterval(interval);
          onClose(popup);
        }
      } catch (e) {
        // empty
      }
    }, 800);
  }
};
