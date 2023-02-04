"use strict";

///////////// MENU SECTION //////////////
const menubtn = document.querySelector(".menubtn");
const openmenu = document.querySelector(".openMenu");

menubtn.addEventListener("click", function () {
  openmenu.classList.toggle("closeMenu");
});

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

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.zIndex = -2;
  const tempCounter = currentImageCounter;
  setTimeout(() => {
    slideshowImages[tempCounter].style.opacity = 0;
  }, 1000);

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
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

///////////// LEADERSHIP SECTION //////////////
const allLeaderBoxes = document.querySelectorAll(".leader-box");

allLeaderBoxes.forEach(function (box) {
  box.classList.add("hidden");
});

const obsCallback = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting)
    entry.target.classList.remove("hidden").add("slide");
};

const obsOptions = {
  root: null,
  threshold: [0],
};

const leaderSectionObserver = new IntersectionObserver(obsCallback, obsOptions);
allLeaderBoxes.forEach((box) => leaderSectionObserver.observe(box));

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
