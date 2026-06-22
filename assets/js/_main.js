/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {
  // Language auto-redirect on homepage based on saved preference
  var langPref = localStorage.getItem("lang");
  var curPath = window.location.pathname.replace(/\/$/, "") || "/";
  var isZhPage = curPath === "/zh" || curPath.startsWith("/zh/");
  if (curPath === "/" && langPref === "zh") {
    window.location.href = "/zh/";
  } else if (curPath === "/zh" && langPref === "en") {
    window.location.href = "/";
  }

  // Set the theme on page load
  var setTheme = function (theme) {
    const use_theme = theme || localStorage.getItem("theme") || $("html").attr("data-theme");
    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (use_theme === "light") {
      $("html").removeAttr("data-theme");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  }
  setTheme();

  // Toggle the theme
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  }
  $('#theme-toggle').on('click', function () {
    toggleTheme();
  });

  // Translate post via Google Translate redirect
  var translatePost = function () {
    var lang = $('#post-lang').text().trim();
    var target = lang === "zh" ? "en" : "zh-CN";
    var url = "https://translate.google.com/translate?sl=auto&tl=" + target + "&u=" + encodeURIComponent(window.location.href);
    window.location.href = url;
  };

  // Translate button on posts
  $(document).on('click', '.translate-trigger', function (e) {
    e.preventDefault();
    translatePost();
  });

  // Language toggle in masthead
  var langToggle = function () {
    var $postLang = $('#post-lang');
    if ($postLang.length) {
      translatePost();
      return;
    }
    // On a regular page: navigate between /page/ and /zh/page/
    var path = window.location.pathname.replace(/\/$/, "") || "/";
    var isZh = path === "/zh" || path.startsWith("/zh/");
    var newPath;
    if (isZh) {
      newPath = path.replace("/zh", "") || "/";
    } else {
      newPath = path === "/" ? "/zh/" : "/zh" + path + "/";
    }
    window.location.href = newPath;
  };
  $('#lang-toggle').on('click', function (e) {
    e.preventDefault();
    langToggle();
  });

  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({ offset: -65 });

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

});
