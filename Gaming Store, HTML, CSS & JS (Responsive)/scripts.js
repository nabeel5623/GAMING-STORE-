let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');




menu.onclick = () => {
    
    
    menu.classList.toggle('move')
    navbar.classList.toggle('active')
    bell.classList.remove('active')
    
}


// Notification toggle

let bell = document.querySelector('.notification');
document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active')
}

// Swiper slider trending
// Autoplay mode effect

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
    breakpoints: {
      550: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
      1080: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  // Custom scroll bar

window.onscroll = function() {mufunction()};

function mufunction() {
  // Calculates the current vertical scroll position of the page
  var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
  // Determines the total scrollable height of the page by subtracting the visible height from the total height.
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  // Calculates the percentage of the page that has been scrolled
  var scrolled = (winscroll / height) * 100;
  // Selects the HTML element with the ID "scroll-bar" and updates its width style property to the calculated percentage, effectively creating a visual representation of the scrolling progress.
  document.getElementById('scroll-bar').style.width = scrolled + '%';
}