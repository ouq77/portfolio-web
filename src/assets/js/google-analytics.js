/* global $ */
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', '<%= GOOGLE_ACCOUNT.analytics %>');

$(function() {
  $('.js_track_link_click').on('click', function() {
    gtag('send', 'event', 'link_click', $(this).attr('href'));
  });
  $('.btn-submit').on('click', function() {
    gtag('send', 'event', 'button_click', $(this).attr('value'));
  });
});
