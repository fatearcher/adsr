// (function ($) {
//   $(function () {
//     $("#nav-toggle").on("click", function () {
//       $("body").toggleClass("open");
//       $(".custom-btn").toggleClass("none");
//       $(".custom-btn-1").toggleClass("none");
//       $(".custom-btn-2").toggleClass("none");
//     });
//   });
// })(jQuery);

const navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", function (event) {
  document.querySelector('body').classList.toggle('open');
  document.querySelector(".custom-btn").classList.toggle("none");
  document.querySelector(".custom-btn-1").classList.toggle("none");
  document.querySelector(".custom-btn-2").classList.toggle("none");
});
