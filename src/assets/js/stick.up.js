/*! stick.up (Custom Build) !*/
(function($) {
  var contentTop = [],
    content = [],
    lastScrollTop = 0,
    scrollDir = '',
    itemClass = '',
    itemHover = '',
    menuSize = null,
    stickyHeight = 0,
    stickyMarginB = 0,
    currentMarginT = 0,
    topMargin = 0,
    varTop = 0,
    varScroll = 0,
    comparator;

  $(window).scroll(function() {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      scrollDir = 'down';
    } else {
      scrollDir = 'up';
    }
    lastScrollTop = st;
  });

  $.fn.stickUp = function(options) {
    // adding a class to users div
    $(this).addClass('stuck-menu');
    // getting options
    var objn = 0;
    if (options != null) {
      for (var o in options.parts) {
        if (options.parts.hasOwnProperty(o)) {
          content[objn] = options.parts[objn];
          objn++;
        }
      }
      if (objn === 0) {
        console.log('error:needs arguments');
      }
      itemClass = options.itemClass;
      itemHover = options.itemHover;
      if (options.topMargin != null) {
        if (options.topMargin == 'auto') {
          topMargin = parseInt($('.stuck-menu').css('margin-top'));
        } else {
          if (isNaN(options.topMargin) && options.topMargin.search('px') > 0) {
            topMargin = parseInt(options.topMargin.replace('px', ''));
          } else if (!isNaN(parseInt(options.topMargin))) {
            topMargin = parseInt(options.topMargin);
          } else {
            console.log('incorrect argument, ignored.');
            topMargin = 0;
          }
        }
      } else {
        topMargin = 0;
      }
      menuSize = $('.' + itemClass).length;
    }
    stickyHeight = parseInt($(this).height());
    stickyMarginB = parseInt($(this).css('margin-bottom'));
    currentMarginT = parseInt($(this).next().closest('div').css('margin-top')) || 0;
    varTop = parseInt($(this).offset().top);
    initFocus();
  };

  $(document).on('scroll', function() {
    handleScroll();
  });

  function initFocus() {
    scrollDir = 'down';
    handleScroll();
  }

  function bottomView(i) {
    if (varScroll < 100) {
      $('.' + itemClass).removeClass(itemHover);
      $('.' + itemClass + ':eq(0)').addClass(itemHover);
    } else if (i < (menuSize - 1) &&
      varScroll > contentTop[i] - 100 &&
      varScroll < contentTop[i + 1] + 100) {
      $('.' + itemClass).removeClass(itemHover);
      $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
    }
  }

  function elInViewport(el) {
    var viewportWidth = $(window).width(),
      viewportHeight = $(window).height(),
      minTop = $(document).scrollTop(),
      maxTop = minTop + viewportHeight,
      minLeft = $(document).scrollLeft(),
      maxLeft = minLeft + viewportWidth,
      elementOffset = el.offset();

    return ((elementOffset.top > minTop && elementOffset.top < maxTop) &&
      (elementOffset.left > minLeft && elementOffset.left < maxLeft));
  }

  function handleScroll() {
    varScroll = parseInt($(document).scrollTop());
    if (menuSize != null) {
      for (var i = 0; i < menuSize; i++) {
        contentTop[i] = $('#' + content[i] + '').offset().top;
        if (scrollDir == 'down') {
          if (varScroll > contentTop[i] - 100 && varScroll < contentTop[i] + 100) {
            $('.' + itemClass).removeClass(itemHover);
            $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
          }
          // in case bottom item is very small
          if (elInViewport($('#' + content[menuSize - 1] + ' h2:first'))) {
            $('.' + itemClass).removeClass(itemHover);
            $('.' + itemClass + ':eq(' + parseInt(menuSize - 1) + ')').addClass(itemHover);
          }
        }
        if (scrollDir == 'up') {
          bottomView(i);
        }
      }
    }

    comparator = varScroll + topMargin;

    var $stuckMenu = $('.stuck-menu');

    if (varTop < comparator && varScroll > 60) {
      $('.wrapper').addClass('special-height');
      $stuckMenu.addClass('is-stuck');
      $stuckMenu.next().closest('div').css({'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'});
      $stuckMenu.css('position', 'fixed');
      $('.is-stuck').css({top: '0px'}, 10);
    }

    if (comparator < varTop) {
      $('.wrapper').removeClass('special-height');
      $stuckMenu.removeClass('is-stuck');
      $stuckMenu.next().closest('div').css({'margin-top': currentMarginT + 'px'});
      $stuckMenu.css('position', 'relative');
    }
  }
})(jQuery);
