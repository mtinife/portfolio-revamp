const siteContact = document.querySelector('#siteContact'),
      heroContact = document.querySelector('#heroContact'),
      navContact  = document.querySelector('#navContact'),
      close       = document.querySelector('.close'),
      bgModal     = document.querySelector('.bg-modal'),
      modalCancel = document.querySelector('#modalCancel'),
      nav         = document.querySelector('nav');

loadEventListeners();

function loadEventListeners() {

    document.addEventListener('DOMContentLoaded', responsiveNav);

    siteContact.addEventListener('click', openContact);

    heroContact.addEventListener('click', openContact);

    navContact.addEventListener('click', openContact);

    close.addEventListener('click', closeContact);

    modalCancel.addEventListener('click', closeContact);
}

window.onscroll = () => {

    navColorChange();

}

function navColorChange() {

    const logoChange = document.querySelector('#logoChange');

    const $navItems = Array.prototype.slice.call(document.querySelectorAll('.change-White'), 0);

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        
        nav.classList.add('black');
        
        logoChange.innerHTML = '<img src="./images/logo/logo-white.png" width="45" height="30">';
    
    } else {
        nav.classList.remove('black');

        logoChange.innerHTML = '<img src="./images/logo/logo-black.png" width="45" height="30">';

    }
}

function responsiveNav() {
      // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}

function openContact(e) {

    bgModal.style.display = 'flex';

}

function closeContact(e) {

    bgModal.style.display = 'none';

}
