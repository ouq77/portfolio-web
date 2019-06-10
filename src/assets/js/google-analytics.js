window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = +new Date();
ga('create', '<%= GOOGLE_ACCOUNT.analytics %>', 'auto');
ga('send', 'pageview');

(function($) {
  $(document).on('click', '.js_track_link_click', function() {
    ga('send', 'event', 'link_click', $(this).attr('href'));
  });
  $(document).on('click', '.btn-submit', function() {
    ga('send', 'event', 'button_click', $(this).attr('value'));
  });
})(jQuery);
