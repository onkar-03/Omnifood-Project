// Dynamic Year update in HTML using JavaScript in footer section
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Toggle menu for Mobile Navigation
const button = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

button.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile navigation
    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});

// Sticky Navigation using Js
// We want the navigation to get sticky when the hero-section is out of viewport
const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    // Collecting the first entry from array of entries which corresponds to each threshold value
    const ent = entries[0];

    // Add sticky nav as soon as the section ends
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky');
    }

    // Remove sticky nav as soon as we get back up
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // viewing the stick nav In the Viewport -> root:null;
    root: null,

    //Fire event the sticky nav as soon as there is 0% of the hero-section is inside of the  viewport
    threshold: 0,

    // To load the sticky nav as soon as there is only 80px left for hte hero section to finish completely
    rootMargin: '-80px',
  },
);

// Calling Function
obs.observe(sectionHero);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
