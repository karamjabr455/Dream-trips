// nav bar searchBtn...................... 

let searchBtn =document.querySelector("#searsh-btn");
let searchBtnForm=document.querySelector(".searsh-form");
let logInForm=document.querySelector(".logo-in-form");
let MenuBar=document.querySelector("#menu-bar");
let AMenuBar=document.querySelector(".navbar");
let videoBtn=document.querySelectorAll(".video-btn");



function showbar(){
    // The search icon is toggled to x when pressed using toggle("fa-times")
    searchBtn.classList.toggle("fa-times")
    // Activate the value and show the search box
    searchBtnForm.classList.toggle("active")
}

function showForm(){
    // Adding a login list when clicking on the user icon via the active property in css and the classList property in js

    logInForm.classList.add("active")
}
//Delete the form
function hideForm(){
    logInForm.classList.remove("active")
}

//Menu button when responding

function showMenu(){
    MenuBar.classList.toggle("fa-times")
    AMenuBar.classList.toggle("active")
}

//slider...............................................

let currentVideo = 0;
let lastUpdateTime = 0;
let intervalId = null;

const videoSlider = document.querySelector("#video-slider");

videoBtn.forEach(slide => {
  slide.addEventListener("click", function() {
    document.querySelector(".controls .red").classList.remove("red");
    slide.classList.add("red");
    let videoSrc = slide.getAttribute("data-src");
    videoSlider.src = videoSrc;
  });
});

function playNextVideo() {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;

  if (deltaTime >= 5000) { //  5 seconds
    currentVideo++;

    if (currentVideo >= videoBtn.length) {
      currentVideo = 0;
    }

    const nextSlide = videoBtn[currentVideo];
    const nextVideoSrc = nextSlide.getAttribute("data-src");

    videoSlider.src = nextVideoSrc;
    nextSlide.classList.add("red");
    document.querySelector(".controls .red").classList.remove("red");

    lastUpdateTime = now;
  }
}

intervalId = setInterval(playNextVideo, 5000); // Every 5 seconds

// Rating stars.............................................................................................................

const sections = document.querySelectorAll('.containerr .box1');

sections.forEach(section => {
  const stars = section.querySelectorAll('.stars i');
  const currentRatingSpan = section.querySelector('.current-rating');

  stars.forEach(star => {
    star.addEventListener('click', function() {
      const rating = this.dataset.rating;
      updateRating(section, rating);
    });
  });
});

function updateRating(section, newRating) {
  const stars = section.querySelectorAll('.stars i');
  stars.forEach((star, index) => {
    if (index < newRating) {
      star.classList.add('selected', 'fas', 'fa-star');
      star.style.color = '#d90429'; // Set color for selected stars
    } else {
      star.classList.remove('selected', 'fas', 'fa-star');
      star.style.color = ''; // Reset color for unselected stars (optional)
    }
  });

  const currentRatingSpan = section.querySelector('.current-rating');
  currentRatingSpan.textContent = `Rating value: ${newRating}`;
}

// slide ...................................

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector('.review-slider');
  const slides = document.querySelectorAll('.box-slider');
  let currentSlide = 0;
  const numVisibleSlides = 3;
  const numTotalSets = Math.ceil(slides.length / numVisibleSlides); // Number of groups playing in the slider

  function setSlide(index) {
      const offset = index * -300; // 100% transition for each group of slides
      slides.forEach((slide) => {
          slide.style.transform = `translateX(${offset}%)`;
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % numTotalSets; // لوب الانتقال بين المجموعات
      setSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
});