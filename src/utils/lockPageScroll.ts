interface ScrollLockSnapshot {
  scrollX: number;
  scrollY: number;
  htmlOverflow: string;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyRight: string;
  bodyWidth: string;
}

let scrollLockCount = 0;
let scrollLockSnapshot: ScrollLockSnapshot | null = null;

export const lockPageScroll = (): (() => void) => {
  scrollLockCount += 1;
  if (scrollLockCount === 1) {
    const html = document.documentElement;
    const { body } = document;
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    scrollLockSnapshot = {
      scrollX,
      scrollY,
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
  }

  let released = false;
  return () => {
    if (released) return;
    released = true;
    scrollLockCount -= 1;
    if (scrollLockCount > 0 || scrollLockSnapshot === null) return;

    const html = document.documentElement;
    const { body } = document;
    const snapshot = scrollLockSnapshot;
    scrollLockSnapshot = null;

    html.style.overflow = snapshot.htmlOverflow;
    body.style.overflow = snapshot.bodyOverflow;
    body.style.position = snapshot.bodyPosition;
    body.style.top = snapshot.bodyTop;
    body.style.left = snapshot.bodyLeft;
    body.style.right = snapshot.bodyRight;
    body.style.width = snapshot.bodyWidth;

    window.scrollTo(snapshot.scrollX, snapshot.scrollY);
  };
};

