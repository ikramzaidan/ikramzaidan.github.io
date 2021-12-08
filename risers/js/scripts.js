/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    /////////// Navbar shrink function (2)
    var navbarShrink2 = function () {
        const navbarCollapsible2 = document.body.querySelector('.bottomNav');
        if (!navbarCollapsible2) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible2.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible2.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar (2)
    navbarShrink2();

    // Shrink the navbar when page is scrolled (2)
    document.addEventListener('scroll', navbarShrink2);

    // Activate Bootstrap scrollspy on the main nav element (2)
    const bottomNav = document.body.querySelector('.bottomNav');
    if (bottomNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '.bottomNav',
            offset: 74,
        });
    };


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
