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
    });
});
