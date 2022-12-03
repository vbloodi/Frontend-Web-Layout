document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".section-work__button")
    .forEach(function (tabsBtn) {
      console.log(tabsBtn);
      tabsBtn.addEventListener("click", function (event) {
        const path = event.currentTarget.dataset.path;

        document
          .querySelectorAll(".section-work__down")
          .forEach(function (tabContent) {
            tabContent.classList.remove("section-work__down--active");
          });
        document
          .querySelector(`[data-target="${path}"]`)
          .classList.add("section-work__down--active");
      });
      tabsBtn.addEventListener("click", function (event) {
        const tabDefault = event.currentTarget.dataset.default;

        document
          .querySelectorAll(".section-work__button")
          .forEach(function (tabContent) {
            tabContent.classList.remove("section-work__button--default");
          });
        document
          .querySelector(`[data-path="${tabDefault}"]`)
          .classList.add("section-work__button--default");
      });
    });
  function handleFirstTab(e) {
    if (e.keyCode === 9) {
      document.body.classList.add("user-is-tabbing");

      window.removeEventListener("keydown", handleFirstTab);
      window.addEventListener("mousedown", handleMouseDownOnce);
    }
  }

  function handleMouseDownOnce() {
    document.body.classList.remove("user-is-tabbing");

    window.removeEventListener("mousedown", handleMouseDownOnce);
    window.addEventListener("keydown", handleFirstTab);
  }

  window.addEventListener("keydown", handleFirstTab);
});
