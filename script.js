// Get elements
const hamburger = document.getElementById('hamburger');
const innerNav = document.getElementById('inner-nav');
const themeToggler = document.getElementById('theme-toggler');
const menuItems = document.querySelector('#inner-nav ul');

// Toggle navigation when hamburger is clicked
hamburger.addEventListener('click', () => {
    innerNav.classList.add('expand');
    menuItems.style.display = 'flex';
    hamburger.style.display = 'none';
    themeToggler.style.display = 'block';
    menuItems.appendChild(themeToggler);
});

if (window.innerWidth <= 375) {
    let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        innerNav.classList.remove('expand');
        menuItems.style.display = 'none';
        hamburger.style.display = 'block'; // Shrink nav back
    } else {
        innerNav.classList.remove('expand');
        menuItems.style.display = 'none';
        hamburger.style.display = 'block';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
});
}