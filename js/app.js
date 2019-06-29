// Nav Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'right' });
});

// Contact Form Budget Options
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});

// Scrollspy
document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elems, {});
});

// nav scroll color change
window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (this.scrollY <= 10) nav.className = 'transparent z-depth-0';
    else nav.className = 'scroll-color';
};

// set copyright current year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// section link highlighting
const sections = document.querySelectorAll('.in-view');
const config = {
    rootMargin: '0px',
    threshold: 0.5
};

let observer = new IntersectionObserver(function(entries, self) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

sections.forEach(section => {
    observer.observe(section);
});

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector('.active-link');
    const shouldBeActive = document.querySelector(`a[href="#${id}"]`);
    const currentlyActiveMobile = document.querySelector('#nav-mobile .active-link');
    const shouldBeActiveMobile = document.querySelector(`#nav-mobile a[href="#${id}"]`);

    console.log(`ID is: ${id}`);
    console.log(`Active is: ${currentlyActive}`);
    console.log(`Next active is: ${shouldBeActive}`);
    console.log(`Active mobile is: ${currentlyActiveMobile}`);
    console.log(`Next active mobile is: ${shouldBeActiveMobile}`);


    if (currentlyActive) {
        currentlyActive.classList.remove('active-link');
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add('active-link');
    }
    if (currentlyActiveMobile) {
        currentlyActiveMobile.classList.remove('active-link');
    }
    if (shouldBeActiveMobile) {
        shouldBeActiveMobile.classList.add('active-link');
    }
}