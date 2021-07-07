const slides = document.querySelectorAll(".slide");

function clearActiveClass() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

for (const slide of slides) {
  slide.addEventListener("click", () => {
    if (slide.classList.contains("active")) {
      clearActiveClass();
    } else {
      clearActiveClass();
      slide.classList.add("active");
    }
  });
}
