(function($) {
  var encodeTitle = function(title) {
    return encodeURIComponent(title.replace(/ /g, '-').replace(/\&/g, 'and').replace(/[^A-Za-z0-9\-]/g, '').toLowerCase());
  };

  var setHash = function(title) {
    window.location.hash = encodeTitle(title);
  };

  var openTab = function(hash) {
    var encoded_title;
    $('.vertical-tab-button a strong').each(function() {
      encoded_title = encodeTitle($(this).text());
      if (hash == encoded_title) {
        $(this).parent('a').click();
      }
    });
  };

  // handle vertical tabs
  $(window).load(function() {
    $('.vertical-tab-button a').click(function(e) {
      setHash($(this).find('strong').text());
    });

    $(window).hashchange(function() {
      openTab(window.location.hash.replace('#', ''));
    });

    var initial_hash = window.location.hash;
    if (initial_hash.length) {
      openTab(initial_hash.replace('#', ''));
    }
  });
}).call(this, jQuery);