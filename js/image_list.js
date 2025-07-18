
// Function to initialize the Masonry library
function initMasonry() {
  const grid = document.querySelector('#image-list');
  if (!grid) return;

  // Wait for images to load before Masonry layout
  imagesLoaded(grid, function () {
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
  console.log("Initial list");
  console.log(list);

  imageUrls.forEach(({ thumbnail, full }, index) => {
    const li = document.createElement("li");
    li.classList.add("box");
    li.innerHTML = `
      <div class="inner">
        <a href="${full}" class="glightbox">
          <img src="${thumbnail}" alt="image" />
        </a>
      </div>
      `;
    list.appendChild(li);
    console.log(li)
    // Trigger animation by adding 'show' class on next animation frame
    requestAnimationFrame(() => {
      li.classList.add("show");
    });
  });

  console.log("Full list");
  console.log(list);

  // Reinitialize glightbox if needed
  if (typeof GLightbox === "function") {
    GLightbox({ selector: '.glightbox' });
  }

  // Initialize Masonry
  initMasonry();
}

// Initialize Lightbox
GLightbox({ selector: '.glightbox' });