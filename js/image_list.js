const imageList = document.getElementById("image-list");

imageUrls.forEach(({ thumbnail, full}, index) => {
  const delay = (index + 1) * 0.05;
  const li = document.createElement("li");
  li.className = "box show";
  li.style.transitionDelay = `${delay}s`;

  li.innerHTML = `
    <div class="inner">
      <a href="${full}" class="glightbox">
        <img src="${thumbnail}" alt="image" />
      </a>
    </div>
  `;

  imageList.appendChild(li);
});

// Initialize lightbox after images are added to the DOM
GLightbox({ selector: '.glightbox' });
