const products = [
    {
        id: 'fc-1888',
        name: "flux capacitor",
        avg_rating: 4.5
    },
    {
        id: 'fc-2050',
        name: "power laces",
        avg_rating: 4.7
    },
    {
        id: 'fs-1987',
        name: "time circuits",
        avg_rating: 3.5
    },
    {
        id: 'ac-2000',
        name: "low voltage reactor",
        avg_rating: 3.9
    },
    {
        id: 'jj-1969',
        name: "warp equalizer",
        avg_rating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        // option.innerHTML = product.name;
        productSelect.appendChild(option);
    });

    const currentyear = document.querySelector("#currentyear");
    const lastmodified = document.querySelector("#lastmodified");

    let today = new Date();
    let year = today.getFullYear();
    currentyear.innerHTML = year;

    let date = new Date(document.lastModified);
    lastmodified.innerHTML = date;
});


