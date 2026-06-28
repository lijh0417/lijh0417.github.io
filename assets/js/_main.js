/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

/* ==========================================================================
   Password protection helpers
   ========================================================================== */

function base64ToBytes(b64) {
  var bin = atob(b64);
  var bytes = new Uint8Array(bin.length);
  for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

async function deriveKey(password, salt) {
  var enc = new TextEncoder();
  var keyMaterial = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveKey"]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: base64ToBytes(salt), iterations: 600000, hash: "SHA-256" },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["decrypt"]
  );
}

async function decryptContent(password, data) {
  var key = await deriveKey(password, data.salt);
  var ct = base64ToBytes(data.data);
  var tag = base64ToBytes(data.tag);
  var combined = new Uint8Array(ct.length + tag.length);
  combined.set(ct);
  combined.set(tag, ct.length);
  var decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBytes(data.iv) },
    key,
    combined
  );
  return new TextDecoder().decode(decrypted);
}

function renderMathIn(container) {
  if (typeof renderMathInElement === "function") {
    try {
      renderMathInElement(container, {
        delimiters: [
          { left: "\\[", right: "\\]", display: true },
          { left: "\\(", right: "\\)", display: false },
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } catch (_) {}
  }
}

function protectMathIn(md) {
  var blocks = [];
  var s = md.replace(/(\$\$[\s\S]*?\$\$)/g, function (m) {
    blocks.push(m);
    return "\x00MATH_" + (blocks.length - 1) + "\x00";
  });
  s = s.replace(/(\$(?:[^$\n]+?)\$)/g, function (m) {
    blocks.push(m);
    return "\x00MATH_" + (blocks.length - 1) + "\x00";
  });
  return { s: s, blocks: blocks };
}

function restoreMathIn(html, blocks) {
  return html.replace(/\x00MATH_(\d+)\x00/g, function (_, idx) { return blocks[parseInt(idx)]; });
}

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

  // Language toggle: navigate between EN and ZH versions via URL prefix
  var langToggle = function () {
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

  // Password protection unlock
  if (window.ENCRYPTION_DATA && document.getElementById("unlock-btn")) {
    $("#unlock-btn").on("click", async function () {
      var pw = $("#password-input").val();
      if (!pw) return;
      $("#password-error").hide();
      $("#password-loading").show();
      try {
        var md = await decryptContent(pw, window.ENCRYPTION_DATA);
        if (typeof marked === "undefined") throw new Error("marked not loaded");
        var protected_ = protectMathIn(md);
        var html = marked.parse(protected_.s);
        html = restoreMathIn(html, protected_.blocks);
        $("#password-gate").hide();
        $("#protected-content").html(html).show();
        renderMathIn(document.getElementById("protected-content"));
      } catch (e) {
        $("#password-error").show();
      }
      $("#password-loading").hide();
    });
    $("#password-input").on("keypress", function (e) {
      if (e.which === 13) $("#unlock-btn").click();
    });
    $("#password-input").focus();
  }

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
