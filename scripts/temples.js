// temples.js
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const nav = header.querySelector('nav');
  
  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.id = 'hamburger';
  hamburger.innerHTML = '&#9776;'; // hamburger icon
  
  // Insert the hamburger button before the nav menu
  header.insertBefore(hamburger, nav);

  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    if (navMenu.classList.contains('show')) {
      hamburger.innerHTML = '&#10006;'; // X symbol
    } else {
      hamburger.innerHTML = '&#9776;'; // hamburger icon
    }
  });

  // const currentyear = document.getElementById("currentyear");
  const currentyear = document.querySelector("#currentyear");

  const lastmodified = document.querySelector("#lastmodified");

  let today = new Date();
  let year = today.getFullYear();
  currentyear.innerHTML = year;

  let date = new Date(document.lastModified);
  lastmodified.innerHTML = date;

});

