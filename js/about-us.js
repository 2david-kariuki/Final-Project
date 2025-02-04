document.addEventListener("DOMContentLoaded", function () {
  const aboutUsSection = document.getElementById("about-us");

  if (aboutUsSection) {
    aboutUsSection.innerHTML = `
            <h1>About Us</h1>
            <p>Welcome to our company. We are dedicated to providing the best service possible.</p>
            <p>Our team is composed of experienced professionals who are passionate about their work.</p>
            <p>Contact us at davi@vet.gmail.com for more information.</p>
        `;
  }
});
