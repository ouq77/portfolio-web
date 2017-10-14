export const elementInViewport = ($: JQueryStatic, el: JQuery) => {
  let viewportWidth = $(window).width();
  let viewportHeight = $(window).height();
  let minTop = $(document).scrollTop();
  let maxTop = minTop + viewportHeight;
  let minLeft = $(document).scrollLeft();
  let maxLeft = minLeft + viewportWidth;
  let elementOffset = el.offset();

  return ((elementOffset.top > minTop && elementOffset.top < maxTop) &&
    (elementOffset.left > minLeft && elementOffset.left < maxLeft));
};
