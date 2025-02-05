document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const bookButton = document.getElementById("bookApointment");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon");
      contactForm.reset();
    });
  }
  if (bookButton) {
    bookButton.addEventListener("click", () => {
      alert("Your appointment has been booked!");
    });
  }
});
