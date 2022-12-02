"use strict";

///////////// MENU SECTION //////////////
const menubtn = document.querySelector(".menubtn");
const openmenu = document.querySelector(".openMenu");

menubtn.addEventListener("click", function () {
  openmenu.classList.toggle("closeMenu");
});

// openmenu.addEventListener("click", (e) => {
//   e.preventDefault;
// });

///////////// MENU SECTION - our founder & about us //////////////

function founderonlytoggle() {
  founderToggle.style.opacity = "100";
  aboutUsToggle.style.opacity = "0";
}

function aboutonlytoggle() {
  founderToggle.style.opacity = "0";
  aboutUsToggle.style.opacity = "100";
}

const founderlink = document.querySelector(".founderlink");
founderlink.addEventListener("click", founderonlytoggle);

const aboutlink = document.querySelector(".aboutlink");
aboutlink.addEventListener("click", aboutonlytoggle);

///////////// SLIDER/INTRO SECTION //////////////

const slideshowImages = document.querySelectorAll(".intro .slideshow-img");

const nextImageDelay = 3000;

let currentImageCounter = 0;

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  // slideshowImages[currentImageCounter].style.opacity = 0;
  slideshowImages[currentImageCounter].style.zIndex = -2;
  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
  }, 1000);

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
  slideshowImages[currentImageCounter].style.zIndex = -1;
}

///////////// HISTORY SECTION //////////////

const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const founderToggle = document.querySelector(".founder");
const aboutUsToggle = document.querySelector(".about_us");

function defaultMov() {
  if (founderToggle.style.opacity == "0" || founderToggle.style.opacity == "") {
    founderToggle.style.opacity = "100";
    aboutUsToggle.style.opacity = "0";
  } else {
    founderToggle.style.opacity = "0";
    aboutUsToggle.style.opacity = "100";
  }
}

next.addEventListener("click", defaultMov);
previous.addEventListener("click", defaultMov);

/////////////HISTORY SECTION <= coming from PROJECTS SECTION //////////////
if (window.location.href.split("#")[1] === "founder") {
  founderToggle.style.opacity = "100";
  aboutUsToggle.style.opacity = "0";
}

///////////// LEADER SECTION //////////////

// const box = document.getElementsByClassName("leader-box-content");
// const button = document.getElementsByClassName("leader-title");
// const wholeBox = document.getElementsByClassName("leader-box");

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", function () {
//     box[i].classList.toggle("hidden");
//     wholeBox[i].classList.toggle("shadow");
//   });
// }

///////////// AWARDS SECTION //////////////
// const awardsDes = document.querySelectorAll(".awards-description");

// awardsDes.forEach((des) =>
//   des.addEventListener("click", function () {
//     des.style.opacity = des.style.opacity === "0" || "" ? "100" : "0";
//   })
// );

/////////// GALLERY SECTION //////////////
// Display selected photo//
const galimg = document.querySelectorAll(".section-gallery__img");
const transHiddenGal = document.querySelector(".hideGal");
let hiddenGalBox = document.querySelector(".galPhotoHidden");

const galSection = document.querySelector(".section-gallery");

galimg.forEach((gal, i) => {
  return gal.addEventListener("click", function () {
    hiddenGalBox.src = gal.src;

    transHiddenGal.classList.remove("toggleIndex");

    transHiddenGal.addEventListener("click", function () {
      transHiddenGal.classList.add("toggleIndex");
    });
  });
});
