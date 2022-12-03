window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger-open").addEventListener("click", function () {
    document.querySelector("#burger-menu").classList.toggle("is-active");
  });
});
window.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("#burger-close")
    .addEventListener("click", function () {
      document.querySelector("#burger-menu").classList.toggle("is-active");
    });
});
