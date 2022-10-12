// window.addEventListener("DOMContentLoaded", function () {
// console.log("Hello world! from index.js");
// console.log(document.querySelector(".block"));
// console.log(document.querySelectorAll(".text"));
// document.querySelector(".text").style.backgroundColor = "violet";
// document.querySelector("#text").style.backgroundColor = "pink";
// document.querySelector("#text").classList.add("alert");
// document.querySelector("#text").classList.remove("alert");
// document.querySelector("#text").classList.toggle("alert");
// console.log(document.querySelectorAll(".text"));
// document.querySelectorAll(".text").forEach(function (domElement) {
//   domElement.classList.add("block");
// });
// console.log(document.getElementsByTagName("p"));
// console.log(document.getElementById("text"));
// console.log(document.querySelectorAll("p"));
// });
window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("#menu").classList.toggle("is-active");
  });

  document.querySelectorAll(".text").forEach(function (el) {
    el.addEventListener("click", function (event) {
      event.target.classList.toggle("alert");
    });
  });
});
