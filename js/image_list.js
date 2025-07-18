
// Function to initialize the Masonry library
function initMasonry() {
  const grid = document.querySelector('#image-list');
  if (!grid) return;

  // Wait for images to load before Masonry layout
  imagesLoaded(grid, function() {
    new Masonry(grid, {
      itemSelector: '.box',
      columnWidth: '.box',
      percentPosition: true,
      gutter: 15
    });
  });
}

// Export function that will render list of images when called
export function renderImages(imageUrls) {
  const list = document.getElementById("image-list");
  list.innerHTML = ""; // clear existing image list

  imageUrls.forEach(url => {
      const li = document.createElement("li");
      li.classList.add("box");
      const img = document.createElement("img");
      img.src = typeof url === 'string' ? url : url.url;
      img.alt = "";
      img.classList.add("gallery-img");
      li.appendChild(img);
      list.appendChild(li);
      // Trigger animation by adding 'show' class on next animation frame
      requestAnimationFrame(() => {
        li.classList.add("show");
      });
  });

  // Reinitialize glightbox if needed
  if (typeof GLightbox === "function") {
      GLightbox({ selector: '.gallery-img' });
  }

  // Initialize Masonry
  initMasonry();
}
