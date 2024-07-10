// temples.js
const temples = [
  {
      "templeName": "Aba Nigeria",
      "location": "Aba, Nigeria",
      "dedicated": "2005, August, 7",
      "area": 11500,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
      "templeName": "Cedar City Utah",
      "location": "Cedar City, Utah, United States",
      "dedicated": "2017, December, 10",
      "area": 42657,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
  },
  {
      "templeName": "Manti Utah",
      "location": "Manti, Utah, United States",
      "dedicated": "1888, May, 21",
      "area": 74792,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
      "templeName": "Payson Utah",
      "location": "Payson, Utah, United States",
      "dedicated": "2015, June, 7",
      "area": 96630,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
      "templeName": "Yigo Guam",
      "location": "Yigo, Guam",
      "dedicated": "2020, May, 2",
      "area": 6861,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
      "templeName": "Provo City Center",
      "location": "Provo, Utah, United States",
      "dedicated": "2016, March, 20",
      "area": 85084,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
  },
  {
      "templeName": "Provo Utah",
      "location": "Provo, Utah, United States",
      "dedicated": "1972, February, 9",
      "area": 130825,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
  },
  {
      "templeName": "Winter Quarters Nebraska",
      "location": "Florence, Nebraska, United States",
      "dedicated": "2001, April, 22",
      "area": 16000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
  },
  {
      "templeName": "Salt Lake",
      "location": "Salt Lake City, Utah, United States",
      "dedicated": "1893, April, 6",
      "area": 403000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
      "templeName": "The Hague Netherlands",
      "location": "Zoetermeer, Netherlands",
      "dedicated": "2019, September, 8",
      "area": 10500,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
  },
  {
      "templeName": "St. George Utah",
      "location": "St. George, Utah, United States",
      "dedicated": "1877, April, 6",
      "area": 142000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg"
  },
  {
      "templeName": "Washington D.C.",
      "location": "Kensington, Maryland, United States",
      "dedicated": "1974, November, 19",
      "area": 156558,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
      "templeName": "Jordan River Utah",
      "location": "South Jordan, Utah, United States",
      "dedicated": "1981, November, 16",
      "area": 148236,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"
  },
  {
      "templeName": "Barranquilla Colombia",
      "location": "Barranquilla, Colombia",
      "dedicated": "2018, December, 9",
      "area": 25300,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
  },
  {
      "templeName": "Lima Perú",
      "location": "Lima, Perú",
      "dedicated": "1986, January, 10",
      "area": 9600,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
      "templeName": "Logan Utah",
      "location": "Logan, Utah, United States",
      "dedicated": "1884, May, 17",
      "area": 119619,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
  },
  {
      "templeName": "Vernal Utah",
      "location": "Vernal, Utah, United States",
      "dedicated": "1997, November, 2",
      "area": 38771,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
  },
  {
      "templeName": "Mexico City Mexico",
      "location": "Mexico City, Mexico",
      "dedicated": "1983, December, 2",
      "area": 116642,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  }
]

// Function to generate temple cards based on the given filter
function createTempleCards(filter = "all") {
  const main = document.querySelector("main");
  main.innerHTML = ""; // Clear previous content
  
  let filteredTemples = [];

  switch (filter) {
    case "old":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 2010);
      break;
    case "new":
      filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2010);
      break;
    case "large":
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(temple => temple.area < 30000);
      break;
    default:
      filteredTemples = temples;
  }

  filteredTemples.forEach(temple => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy"; // Native lazy loading
    // figure.appendChild(image);

    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} square feet</p>
    `;
    figure.appendChild(figcaption);

    figure.appendChild(image);

    main.appendChild(figure);
  });
}

// Initial call to display all temples
createTempleCards();

// Event listeners for navigation filters
document.getElementById("navMenu").addEventListener("click", function(event) {
  if (event.target.tagName === "A") {
    const filter = event.target.textContent.toLowerCase();
    createTempleCards(filter);
  }
});

//------------------------------------------------------------------------------------

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

