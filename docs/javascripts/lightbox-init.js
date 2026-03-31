(function () {
  function wrapArticleImages() {
    var root = document.querySelector(".md-content__inner");
    if (!root) return;

    root.querySelectorAll("img").forEach(function (img) {
      if (img.closest("a.glightbox")) return;
      if (img.closest("pre")) return;
      if (img.closest("a.headerlink")) return;

      var src = img.getAttribute("src");
      if (!src || src.indexOf("data:") === 0) return;

      var a = document.createElement("a");
      a.href = img.currentSrc || img.src;
      a.className = "glightbox";
      a.setAttribute("data-gallery", "page");
      a.setAttribute("data-type", "image");

      img.replaceWith(a);
      a.appendChild(img);
    });
  }

  function initLightbox() {
    if (typeof GLightbox === "undefined") return;

    if (window.__hfLightbox && typeof window.__hfLightbox.destroy === "function") {
      window.__hfLightbox.destroy();
    }

    wrapArticleImages();

    window.__hfLightbox = GLightbox({
      selector: ".md-content__inner a.glightbox",
      touchNavigation: true,
      keyboardNavigation: true,
      closeOnOutsideClick: true,
    });
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initLightbox);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLightbox);
  } else {
    initLightbox();
  }
})();
