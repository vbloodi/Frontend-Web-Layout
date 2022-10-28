document.addEventListener("DOMContentLoaded", function () {
  $(function () {
    $("#accordion").accordion({
      collapsible: true,
    });
  });
  //Refresh
  $(".section-faq__accordion").accordion("refresh");
});
