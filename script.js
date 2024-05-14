"use strict";
///////////// ANIMATE CLASS //////////////

const allAnimate = document.querySelectorAll(".animate");

const animateCallback = function (entries, _) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("zeroOpacity");
      entry.target.classList.add("solid");
    } else {
      entry.target.classList.remove("solid");
      entry.target.classList.add("zeroOpacity");
    }
  });
};

const animateOptions = {
  root: null,
  threshold: [0.5],
};

const animateObserver = new IntersectionObserver(
  animateCallback,
  animateOptions
);
allAnimate.forEach((item) => animateObserver.observe(item));

/////////// MAIN NAV OBSERVER //////////////

// Intersects Founders to leaders

const navBar = document.querySelectorAll(".nav-list-item");
const founderSection = document.querySelector(".founderBG");

const navCallback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the top of the target element is at or above the top of the viewport
      navBar.forEach((nav) => {
        nav.classList.add("changeNav");
      });
    } else {
      // If the top of the target element is below the top of the viewport
      navBar.forEach((nav) => {
        nav.classList.remove("changeNav");
      });
    }
  });
};

const navOptions = {
  root: null,
  threshold: 0.9,
};

const navObserver = new IntersectionObserver(navCallback, navOptions);
navObserver.observe(founderSection);

// Intersects Projects

const projectsSection = document.querySelector(".section-projects");

const navCallback2 = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // If the top of the target element is at or above the top of the viewport
      navBar.forEach((nav) => {
        nav.classList.add("changeNavProjects");
      });
    } else {
      // If the top of the target element is below the top of the viewport
      navBar.forEach((nav) => {
        nav.classList.remove("changeNavProjects");
      });
    }
  });
};

const navProjectOptions = {
  root: null,
  threshold: 0.9,
};

const navObserver2 = new IntersectionObserver(navCallback2, navProjectOptions);
navObserver2.observe(projectsSection);

/////////////// PROJECTS SECTION - REMOVE LEADERSHIP STICKY BG //////////////
// const leadersBG = document.querySelector(".leadersBG");
// const projectsBG = document.querySelector(".projectsBG");

// const stickyCallback = function (entries, _) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       leadersBG.classList.remove("sticky");
//     } else {
//       leadersBG.classList.add("sticky");
//     }
//   });
// };

// const stickyOptions = {
//   root: null,
//   threshold: 0,
// };

// const stickyObserver = new IntersectionObserver(stickyCallback, stickyOptions);
// stickyObserver.observe(projectsBG);

/////////////// PROJECTS SECTION SLIDER//////////////
document.addEventListener("DOMContentLoaded", function () {
  const scrollers = document.querySelectorAll(".image-scroller");

  scrollers.forEach((scroller) => {
    const images = scroller.querySelectorAll(".project-photo");
    let currentIndex = 0;
    const totalImages = images.length;

    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }

    // Initially show the first image
    images[currentIndex].classList.add("active");

    // Change image every 3 seconds (3000 milliseconds)
    setInterval(showNextImage, 1800);
  });
});

/////////////// PROJECTS SELECTION /////////////

function addHideClassToHiddenElements() {
  projHidden.forEach((hiddenElement) => {
    hiddenElement.classList.add("hide");
  });
}

// Add click event listener to document
document.addEventListener("click", function (event) {
  // Check if the clicked element is not a project image
  if (!event.target.classList.contains("project-img")) {
    // Add back the hide class to all hidden elements
    addHideClassToHiddenElements();
  }
});

const projHidden = document.querySelectorAll(".hidden");
const imgSelection = document.querySelectorAll(".project-img");

imgSelection.forEach((img, i) => {
  img.addEventListener("click", function () {
    const trimmedName = img.className.split(" ")[0];

    projHidden.forEach((hiddenElement) => {
      if (hiddenElement.classList.contains(trimmedName)) {
        hiddenElement.classList.remove("hide");
      }
    });
  });
});

///////////// PROJECTS NAVIGATION /////////////
const page = document.querySelectorAll(".page"); //Actual page
const navCategory = document.querySelectorAll(".project-category"); //navLink

navCategory.forEach((cat) => {
  cat.addEventListener("click", function (current) {
    // selectors
    const selectedNav = current.target;
    const previousCategoryNav = document.querySelector(".select");
    const categoryName = cat.textContent.trim().split(" ")[0]; //take just first name because of affordable
    const categoryClass = ".project-" + categoryName.toLowerCase();
    const selectedCategoryPage = document.querySelector(categoryClass);

    // Nav update (swap select class)
    if (previousCategoryNav) {
      previousCategoryNav.classList.remove("select");
      selectedNav.classList.add("select");
    }

    page.forEach((find) => {
      find.classList.remove("hide"); // Remove "hide" class from all pages first
    });

    // Add "hide" class only to pages that are not selected
    page.forEach((find) => {
      if (!find.classList.contains(selectedCategoryPage)) {
        find.classList.add("hide");
      }
    });

    //Page update (swap hide class)
    if (selectedCategoryPage) {
      selectedCategoryPage.classList.remove("hide");
    }
  });
});
