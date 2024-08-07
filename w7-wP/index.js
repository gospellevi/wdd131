document.addEventListener('DOMContentLoaded', () => {
    // Login and Signup Buttons
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
    if (signupBtn) {
        signupBtn.addEventListener('click', () => {
            window.location.href = 'signup.html';
        });
    }

    // Current Year and Last Modified
    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    if (currentyear) {
        let today = new Date();
        currentyear.innerHTML = today.getFullYear();
    }
    if (lastmodified) {
        let date = new Date(document.lastModified);
        lastmodified.innerHTML = date;
    }

    // Hamburger Menu
    const hamburger = document.createElement('button');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '&#9776;'; // hamburger icon

    const header = document.querySelector('header');
    const nav = document.getElementById('navMenu');
    if (header && nav) {
        header.insertBefore(hamburger, nav);
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('show');
            hamburger.innerHTML = nav.classList.contains('show') ? '&#10006;' : '&#9776;';
        });
    }

    // Read More / Read Less
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moreText = this.previousElementSibling.querySelector('.more');
            if (moreText) {
                if (moreText.style.display === 'none' || moreText.style.display === '') {
                    moreText.style.display = 'inline';
                    this.textContent = 'Read Less';
                } else {
                    moreText.style.display = 'none';
                    this.textContent = 'Read More';
                }
            }
        });
    });

    // Iframe Lazy Loading
    // Check for native lazy loading support
    if (!('loading' in HTMLIFrameElement.prototype)) {
        // Polyfill lazy loading for browsers that don't support it
        const iframes = document.querySelectorAll('iframe[loading="lazy"]');
        const lazyLoad = function() {
            iframes.forEach(function(iframe) {
                if (iframe.getBoundingClientRect().top < window.innerHeight && iframe.getBoundingClientRect().bottom > 0 && getComputedStyle(iframe).display !== 'none') {
                    if (iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                    }
                    iframe.removeAttribute('loading');
                }
            });
        };
        lazyLoad(); // Run on initial load
        window.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);
    }
});