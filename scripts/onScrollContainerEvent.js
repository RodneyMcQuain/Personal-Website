document.addEventListener("DOMContentLoaded", function(event) {
  let containers = document.getElementsByClassName("container");

  window.addEventListener("scroll", function(event) {
      Array.from(containers).forEach(function(container) {
          if (isElementInViewportTop(container) || isElementInViewportBottom(container)) {
            container.classList.add("in-view-appear");
          } else {
            container.classList.remove("in-view-appear");
          }
      });
  });
});

function isElementInViewportBottom (element) {
  let rect = element.getBoundingClientRect();

  return (
    rect.bottom >= 0 &&
    rect.top < window.innerHeight
  );
}

function isElementInViewportTop (element) {
  let rect = element.getBoundingClientRect();
  console.log(rect.top + " " + window.innerHeight);

  return (
    rect.top >= 0 &&
    rect.top < window.innerHeight
  );
}
