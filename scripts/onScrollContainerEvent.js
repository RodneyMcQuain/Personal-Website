document.addEventListener("DOMContentLoaded", function(event) {
  let containers = document.getElementsByClassName("container");

  window.addEventListener("scroll", function() { scrollContainerEvent(containers) });

  /* Manually fired for when someone refreshes the page
  so the scroll event does not need to be triggered to
  show the content. */
  fireScrollEvent();
});

function scrollContainerEvent(containers) {
  Array.from(containers).forEach(function(container) {
    if (isElementInViewport(container)) {
      container.classList.add("in-view-appear");
    } else {
      container.classList.remove("in-view-appear");
    }
  });
}

function isElementInViewport (element) {
  let rect = element.getBoundingClientRect();

  return (
    (rect.top > element.offsetHeight * -1) &&
    (rect.top < window.innerHeight)
  );
}

function fireScrollEvent() {
  window.dispatchEvent(new Event("scroll"));
}
