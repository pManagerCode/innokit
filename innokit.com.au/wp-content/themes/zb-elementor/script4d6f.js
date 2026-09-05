document.addEventListener("DOMContentLoaded", function () {
  // Function to check if the device is iOS or Mac
  function isAppleDevice() {
    return /iP(hone|od|ad)|Macintosh/.test(navigator.userAgent);
  }

  // If the device is iOS or Mac, add the 'ios' class to the body
  if (isAppleDevice()) {
    document.body.classList.add("ios");
  }

  var navToggler = document.querySelector(
    ".header-custom-js .elementor-menu-toggle"
  );

  var logo = document.querySelector(
    ".home .header-custom-js .elementor-widget-theme-site-logo img"
  );

  if (!logo) {
    var logo = document.querySelector(
      ".what-we-do .header-custom-js .elementor-widget-theme-site-logo img"
    );
  }

  if (!logo) {
    var logo = document.querySelector(
      ".contact-us .header-custom-js .elementor-widget-theme-site-logo img"
    );
  }

  navToggler.addEventListener("click", function () {
    if (logo) {
      logo.classList.toggle("custom-invert");
    }
  });
});
