;$(function(app) {
  var profile = app.components.profile;
  $.fn.editable.defaults.mode = 'inline';
  profile.init();
}( window.app = window.app || {} ));
