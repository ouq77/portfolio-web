export const elementInViewport = ($: JQueryStatic, el: JQuery): boolean => {
  const viewportWidth = $(window).width();
  const viewportHeight = $(window).height();
  const minTop = $(document).scrollTop();
  const maxTop = minTop + viewportHeight;
  const minLeft = $(document).scrollLeft();
  const maxLeft = minLeft + viewportWidth;
  const elementOffset = el.offset();

  return ((elementOffset.top > minTop && elementOffset.top < maxTop) &&
    (elementOffset.left > minLeft && elementOffset.left < maxLeft));
};
