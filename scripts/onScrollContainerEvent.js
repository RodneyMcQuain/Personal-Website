document.addEventListener("DOMContentLoaded", function(event) {
  let containers = document.getElementsByClassName("container");

  window.addEventListener("scroll", function(event) {
      Array.from(containers).forEach(function(container) {
          if (isElementInViewport(container)) {
            container.classList.add("in-view-appear");
          } else {
            container.classList.remove("in-view-appear");
          }
      });
  });
});

function isElementInViewport (element) {
  let rect = element.getBoundingClientRect();

  return (
    (rect.top >= 0 && rect.top < window.innerHeight) ||
    (rect.bottom >= 0 && rect.bottom < window.innerHeight)
  );
}
