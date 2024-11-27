function movieCarousel(rowId, start, end) {
    let row = document.getElementById(rowId);
    for (let i = start; i <= end; i++) {
        const imageScroll = `assets/imgs/movies/${i}.png`;
        let card = moviePoster(imageScroll);
        row.appendChild(card);
        // console.log(card);
        // console.log(imageScroll);
    }
}

function moviePoster(imageScroll) {
    let divPic = document.createElement('div');
    divPic.className = "movieCards";
    divPic.innerHTML = `
    <img src="${imageScroll}" class="img-fluid rounded" alt="Movie-Poster">
    `;
    return divPic;
}

function initialize(rowId){
    let slider= document.getElementById(rowId);
    let row = slider.closest('.movieRow');
    let prevBtn = row.querySelector('.prev-button');
    let nextBtn = row.querySelector('.next-button');
    currentTranslate=0;

    nextBtn.addEventListener('click', ()=>{
        currentTranslate -= 1000;
        currentTranslate = Math.max(currentTranslate, -slider.scrollWidth + row.offsetWidth);
        slider.style.transform = `translateX(${currentTranslate}px)`;
        slider.style.transition = "all 1s";
    });

    prevBtn.addEventListener('click', ()=>{
        currentTranslate += 1000
        currentTranslate = Math.min(currentTranslate, 0);
        slider.style.transform = `translateX(${currentTranslate}px)`

        
    });

    }

document.addEventListener('DOMContentLoaded', () => {
    movieCarousel('trendingNow', 1, 6);
    movieCarousel("watchAgain", 7, 12);
    movieCarousel("newReleases", 13, 18);
    initialize('trendingNow');
    initialize("watchAgain");
    initialize("newReleases");
});





let search = document.querySelector(".bi-search");
// console.log(search)
search.addEventListener('click', () => {

    const divBtn = document.getElementById("divBtn");
    divBtn.innerHTML=""
    let inputMax = document.createElement("input");
    inputMax.className = "inputBtn"
    divBtn.appendChild(inputMax)
    
});



