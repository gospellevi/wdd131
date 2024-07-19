document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    console.log(`Number of reviews completed: ${reviewCount}`);
});
