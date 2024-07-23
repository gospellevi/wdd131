// Placeholder for future JavaScript functionality

document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });

    signupBtn.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });

    const currentyear = document.querySelector("#currentyear");

    const lastmodified = document.querySelector("#lastmodified");

    let today = new Date();
    let year = today.getFullYear();
    currentyear.innerHTML = year;

    let date = new Date(document.lastModified);
    lastmodified.innerHTML = date;

    
    
    
});

document.addEventListener('DOMContentLoaded', function() {
  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.id = 'hamburger';
  hamburger.innerHTML = '&#9776;'; // hamburger icon

  // Insert the hamburger button before the nav menu
  const header = document.querySelector('header');
  const nav = document.getElementById('navMenu');
  header.insertBefore(hamburger, nav);

  // Add event listener for the hamburger button
  hamburger.addEventListener('click', function() {
    nav.classList.toggle('show');
    if (nav.classList.contains('show')) {
      hamburger.innerHTML = '&#10006;'; // X symbol
    } else {
      hamburger.innerHTML = '&#9776;'; // hamburger icon
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more-btn');

  readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const moreText = this.previousElementSibling.querySelector('.more');
          if (moreText.style.display === 'none' || moreText.style.display === '') {
              moreText.style.display = 'inline';
              this.textContent = 'Read Less';
          } else {
              moreText.style.display = 'none';
              this.textContent = 'Read More';
          }
      });
  });
});
