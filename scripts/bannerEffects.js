document.addEventListener("DOMContentLoaded", function(event) {
  let bannerHeader = document.getElementById("banner-header");
  let bannerText = document.getElementById("banner-text");
  let bannerBtn = document.getElementById("banner-btn");

  setTimeout(function() {
    bannerHeader.classList.add("banner-appear");
  }, 250);

  setTimeout(function() {
    bannerText.classList.add("banner-appear");
    bannerBtn.classList.add("banner-appear");
  }, 1500);
});
