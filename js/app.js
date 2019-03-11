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

// Services animation
{
  const elems = document.querySelectorAll('.animate');

  const config = {
    root: null,
    rootMargin: "-50px 0px -50px 0px",
    threshold: [1.0]
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // console.log('elem in view');
        entry.target.classList.add('scale-up');
        // observer.unobserve(entry.target);
      }
      else {
        console.log('elem out of view');
        entry.target.classList.remove('scale-up');
      }
    });
  }, config);

  elems.forEach(elem => {
    observer.observe(elem);
  });

}

// set copyright current year
document.getElementById('currentYear').textContent = new Date().getFullYear();
