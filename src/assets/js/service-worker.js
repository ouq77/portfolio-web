if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js?v=<%= LAST_MOD_TIME %>', { scope: '/' });
}
