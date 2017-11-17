/* global $ */
window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = +new Date();
ga('create', '<%= GOOGLE_ACCOUNT.analytics %>', 'auto');
ga('send', 'pageview');

$(function() {
  $('.js_track_link_click').click(function() {
    ga('send', 'event', 'link_click', $(this).attr('href'));
  });
  $('.btn-submit').click(function() {
    ga('send', 'event', 'button_click', $(this).attr('value'));
  });
});
