window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#burger-button")
    .addEventListener("click", function () {
      document.querySelector("#burger-menu").classList.toggle("is-active");
    });
});
