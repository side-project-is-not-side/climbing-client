export default {
  enable: (body: HTMLElement, scrollPosition: number) => {
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    // body.style.pointerEvents = 'none';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.left = '0';
    body.style.right = '0';
  },
  disable: (body: HTMLElement) => {
    const scrollPosition = body.style.top ? -Number(body.style.top.replace('px', '')) : 0;

    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('left');
    body.style.removeProperty('right');
    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  },
};
