function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function smoothScrollTo(targetY: number, duration = 1400) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reducedMotion) {
    window.scrollTo({ top: targetY, behavior: "auto" });
    return;
  }

  const startY = window.scrollY;
  const distance = targetY - startY;
  const start = performance.now();

  function step(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

const duration = 1000;

export function scrollToHash(hash: string) {
  const element = document.querySelector(hash);
  if (!element) return;

  const scrollMargin =
    parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  const top =
    element.getBoundingClientRect().top + window.scrollY - scrollMargin;

  smoothScrollTo(top, duration);
  history.pushState(null, "", hash);
}
