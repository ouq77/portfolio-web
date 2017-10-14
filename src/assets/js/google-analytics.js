window.ga = window.ga || function() {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = +new Date();
ga('create', '<%= GOOGLE_ACCOUNT.analytics %>', 'auto');
ga('send', 'pageview');

function trackEvent(eventCategory, eventAction) {
  ga('send', 'event', eventCategory, eventAction);
}

$(document).ready(function() {
  $('.js_track_link_click').click(function() {
    trackEvent('link_click', $(this).attr('href'));
  });
  $('.btn-submit').click(function() {
    trackEvent('button_click', $(this).attr('value'));
  });
});
