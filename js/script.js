// Dark mode: JavaScript only adds or removes the "dark" class.
// All the colours live in css/style.css under body.dark.
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "Light mode";
  } else {
    themeButton.textContent = "Dark mode";
  }
});

// Contact form: stays on the page and greets the visitor.
// The browser checks required/email first, so an empty email never reaches this code.
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const visitorName = document.getElementById("name").value;
  formMessage.textContent = "Hello, " + visitorName + "! This is a practice form, so nothing was sent.";
  contactForm.reset();
});
