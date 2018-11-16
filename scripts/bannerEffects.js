document.addEventListener("DOMContentLoaded", function(event) {
  let bannerHeader = document.getElementById("banner-header");
  let bannerText = document.getElementById("banner-text");
  let bannerBtnContainer = document.getElementById("banner-btn-container");

  setTimeout(function() {
    bannerHeader.classList.add("banner-appear");
  }, 250);

  setTimeout(function() {
    bannerText.classList.add("banner-appear");
    bannerBtnContainer.classList.add("banner-appear");
  }, 1500);
});
