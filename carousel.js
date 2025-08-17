// const items = document.querySelectorAll('.carousel-item');
// let angle = 0;
// const angleStep = 360 / items.length;

// function updateCarousel() {
//   items.forEach((item, index) => {
//     const rotation = angle + index * angleStep;
//     item.style.transform = `rotateY(${rotation}deg) translateZ(400px)`;
//   });
// }

// document.getElementById('next').addEventListener('click', () => {
//   angle -= angleStep;
//   updateCarousel();
// });

// document.getElementById('prev').addEventListener('click', () => {
//   angle += angleStep;
//   updateCarousel();
// });

// // Initialize positions
// updateCarousel();

const carousel = $(".carousel");
let currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
  if (e.data.d=="n") {
    currdeg = currdeg - 60;
  }

  if (e.data.d=="p") {
    currdeg = currdeg + 60;
  }

  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// loadCarousel("/PinewoodChapel/images/msms.webp", itemB[0]);
// loadCarousel("/PinewoodChapel/images/pineglen.jpg", itemA[0]);
// loadCarousel("/PinewoodChapel/images/bhs.jpg", itemC[0]);

const preloadImages = [ // Why not just preload all the images at this point?
  commonImagePath + 'msms.webp',
  commonImagePath + 'pineglen.jpg',
  commonImagePath + 'bhs.jpg',
  commonImagePath + 'purplesky.jpg',
  commonImagePath + 'bloodmoon.jpg',
  commonImagePath + 'sunrise.webp',
  commonImagePath + 'pinksky.jpeg'
  // commonImagePath + 'morning.jpg',
  // commonImagePath + 'afternoon.jpg',
  // commonImagePath + 'night.jpg'
  // '/PinewoodChapel/images/roadrug.jpg',
  // '/PinewoodChapel/images/capecod.jpg',
  // '/PinewoodChapel/images/stainedglass.jpg',
  // '/PinewoodChapel/images/stained1.jpeg',
  // '/PinewoodChapel/images/pinetree.jpg',
  // '/PinewoodChapel/images/peacock.jpg',
  // '/PinewoodChapel/images/winter.jpg',
  // '/PinewoodChapel/images/winter_maiden_resize.jpg',
  // '/PinewoodChapel/images/christmas.webp',
  // '/PinewoodChapel/images/elaborate.webp',
  // '/PinewoodChapel/images/hummingbirds.webp',
  // '/PinewoodChapel/images/flowers.jpg',
  // '/PinewoodChapel/images/spring.jpg',
  // '/PinewoodChapel/images/lake.jpg',
  // '/PinewoodChapel/images/plymouthrock.jpg',
  // '/PinewoodChapel/images/broken.jpg'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

$(document).on("keydown", function(e) {
  if (e.key === "ArrowRight") {
    $(".next").trigger("click");
  } else if (e.key === "ArrowLeft") {
    $(".prev").trigger("click");
  }
});

// touch gestures
// let touchStartX = 0;
// let touchEndX = 0;

// const handleGesture = () => {
//   const swipeDistance = touchEndX - touchStartX;

//   if (Math.abs(swipeDistance) < 50) return; // ignore tiny swipes

//   if (swipeDistance < 0) {
//     // Swiped left
//     $(".next").trigger("click");
//   } else {
//     // Swiped right
//     $(".prev").trigger("click");
//   }
// };

// const carouselElement = document.querySelector('.carousel');

// carouselElement.addEventListener("touchstart", (e) => {
//   touchStartX = e.changedTouches[0].screenX;
// });

// carouselElement.addEventListener("touchend", (e) => {
//   touchEndX = e.changedTouches[0].screenX;
//   handleGesture();
// });