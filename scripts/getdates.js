// const currentyear = document.getElementById("currentyear");
const currentyear = document.querySelector("#currentyear");

const lastmodified = document.querySelector("#lastmodified");

let today = new Date();
let year = today.getFullYear();
currentyear.innerHTML = year;

let date = new Date(document.lastModified);
lastmodified.innerHTML = date;