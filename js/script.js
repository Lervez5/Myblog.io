document.addEventListener("DOMContentLoaded", function () {
  // Here comes the Images Slider
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Changes the slides after every 3 seconds
  }

  if (slides.length) showSlides();

  // For Form Validation
  const form = document.getElementById("contact-form");
    const messageBox = document.getElementById("form-response");

    if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const message = form.querySelector("#message").value.trim();

        if (!name || !email || !message) {
        messageBox.textContent = "Please fill in all fields.";
        messageBox.style.color = "red";
        } else {
        messageBox.textContent = "Message sent successfully!";
        messageBox.style.color = "green";
        form.reset();
        }
    });
    }

});
