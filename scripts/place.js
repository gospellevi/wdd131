// scripts\place.js
document.addEventListener("DOMContentLoaded", function() {
    const temp =20; // Static temperature value in degree Celsius
    const windSpeed = 10; // Static wind speed value in km/h
    
    const windChillSpan = document.getElementById("windchill");

    function calculateWindChill(temp, windSpeed) {
        // Wind chill formula for Celsius: 13.12 + 0.6215 * T - 11.37 * V**0.16 + 0.3965 * T * V**0.16
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    }

    function displayWindChill() {
        if (temp <= 10 && windSpeed > 4.8) {
            windChillSpan.textContent = `${calculateWindChill(temp, windSpeed)} °C`;
        } else {
            windChillSpan.textContent = "N/A";
        }
    }

    displayWindChill();

    const currentyear = document.querySelector("#currentyear");
  
    const lastmodified = document.querySelector("#lastmodified");
  
    let today = new Date();
    let year = today.getFullYear();
    currentyear.innerHTML = year;
  
    let date = new Date(document.lastModified);
    lastmodified.innerHTML = date;
})