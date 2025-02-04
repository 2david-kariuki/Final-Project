document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  function changeText() {
    const element = document.getElementById("example");
    if (element) {
      element.textContent = "Text has been changed!";
    }
  }

  const button = document.getElementById("changeTextButton");
  if (button) {
    button.addEventListener("click", changeText);
  }
});
