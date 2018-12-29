// Nav Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems, {edge:'right'});
});

// Contact Form Budget Options
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  M.FormSelect.init(elems);
});

// Scrollspy
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.scrollspy');
  M.ScrollSpy.init(elems,{});
});

// Carousel
// document.addEventListener('DOMContentLoaded', function() {
//   let elems = document.querySelectorAll('.carousel');
//   let instance = M.Carousel.init(elems, {
//     duration: 500,
//     fullWidth: true,
//     indicators: true
//   });
// });
