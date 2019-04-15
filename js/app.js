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

// nav scroll color change
window.onscroll = () => {
  const nav = document.querySelector('nav');
  if(this.scrollY <= 10) nav.className = 'z-depth-0';
  else nav.className = 'scroll-color';
};

// set copyright current year
document.getElementById('currentYear').textContent = new Date().getFullYear();
