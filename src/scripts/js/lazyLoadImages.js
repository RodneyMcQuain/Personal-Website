window.addEventListener("load", function() {
  let images = document.getElementsByTagName("img");

  Modernizr.on('webp', function(result) {
    const imageExtension = result ? ".webp" : ".jpg";

    for (let i = 0; i < images.length; i++) {
      let dataSrc = images[i].getAttribute("data-src");

      if (dataSrc)
        images[i].setAttribute("src", dataSrc + imageExtension);
    }
  });
}, false);
