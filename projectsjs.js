"use strict";
///////////// MENU OPEN/CLOSE //////////////
const menubtn = document.querySelector(".menubtn");
const openmenu = document.querySelector(".openMenu");

menubtn.addEventListener("click", function () {
  openmenu.classList.toggle("closeMenu");
});

/////////////////////////////PROJECTS PAGE//////////////////////////////////

//////////////SCROLL UP SUB-HEADING START//////////
const schoolSubHead = document.querySelector(".project__schools__sub-heading");
const schoolSec = document.querySelector(".project__schools");
const comSubHead = document.querySelector(".project__commercial__sub-heading");
const comSec = document.querySelector(".project__commercial");
const affSubHead = document.querySelector(".project__affordable__sub-heading");
const affSec = document.querySelector(".project__affordable");
const specialSubHead = document.querySelector(
  ".project__specialty__sub-heading"
);
const specialSec = document.querySelector(".project__specialty");

schoolSec.addEventListener(
  "click",
  function () {
    schoolSubHead.classList.toggle("hideUp");
  },
  { once: true }
);
comSec.addEventListener(
  "click",
  function () {
    comSubHead.classList.toggle("hideUp");
  },
  { once: true }
);
affSec.addEventListener(
  "click",
  function () {
    affSubHead.classList.toggle("hideUp");
  },
  { once: true }
);
specialSec.addEventListener(
  "click",
  function () {
    specialSubHead.classList.toggle("hideUp");
  },
  { once: true }
);

//////////////SCROLL UP SUB-HEADING END//////////

//HIDDEN SCHOOLS SECTION//
const projectHidden1 = document.querySelector(".hidden-project__1");
const projectbtn1 = document.querySelector(".btn1");
const projectHidden2 = document.querySelector(".hidden-project__2");
const projectbtn2 = document.querySelector(".btn2");
const projectHidden3 = document.querySelector(".hidden-project__3");
const projectbtn3 = document.querySelector(".btn3");
const projectHidden4 = document.querySelector(".hidden-project__4");
const projectbtn4 = document.querySelector(".btn4");

projectbtn1.addEventListener("click", function () {
  projectHidden1.classList.add("revealProject");
  projectHidden1.addEventListener("click", function () {
    projectHidden1.classList.remove("revealProject");
  });
});
projectbtn2.addEventListener("click", function () {
  projectHidden2.classList.add("revealProject");
  projectHidden2.addEventListener("click", function () {
    projectHidden2.classList.remove("revealProject");
  });
});
projectbtn3.addEventListener("click", function () {
  projectHidden3.classList.add("revealProject");
  projectHidden3.addEventListener("click", function () {
    projectHidden3.classList.remove("revealProject");
  });
});
projectbtn4.addEventListener("click", function () {
  projectHidden4.classList.add("revealProject");
  projectHidden4.addEventListener("click", function () {
    projectHidden4.classList.remove("revealProject");
  });
});

//HIDDEN COMMERCIAL SECTION//
const projectHidden5 = document.querySelector(".hidden-project__5");
const projectbtn5 = document.querySelector(".btn5");
const projectHidden6 = document.querySelector(".hidden-project__6");
const projectbtn6 = document.querySelector(".btn6");
const projectHidden7 = document.querySelector(".hidden-project__7");
const projectbtn7 = document.querySelector(".btn7");

projectbtn5.addEventListener("click", function () {
  projectHidden5.classList.add("revealProject");
  projectHidden5.addEventListener("click", function () {
    projectHidden5.classList.remove("revealProject");
  });
});
projectbtn6.addEventListener("click", function () {
  projectHidden6.classList.add("revealProject");
  projectHidden6.addEventListener("click", function () {
    projectHidden6.classList.remove("revealProject");
  });
});
projectbtn7.addEventListener("click", function () {
  projectHidden7.classList.add("revealProject");
  projectHidden7.addEventListener("click", function () {
    projectHidden7.classList.remove("revealProject");
  });
});

//HIDDEN AFFORDABLE SECTION//
const projectHidden8 = document.querySelector(".hidden-project__8");
const projectbtn8 = document.querySelector(".btn8");
const projectHidden9 = document.querySelector(".hidden-project__9");
const projectbtn9 = document.querySelector(".btn9");
const projectHidden10 = document.querySelector(".hidden-project__10");
const projectbtn10 = document.querySelector(".btn10");

projectbtn8.addEventListener("click", function () {
  projectHidden8.classList.add("revealProject");
  projectHidden8.addEventListener("click", function () {
    projectHidden8.classList.remove("revealProject");
  });
});
projectbtn9.addEventListener("click", function () {
  projectHidden9.classList.add("revealProject");
  projectHidden9.addEventListener("click", function () {
    projectHidden9.classList.remove("revealProject");
  });
});
projectbtn10.addEventListener("click", function () {
  projectHidden10.classList.add("revealProject");
  projectHidden10.addEventListener("click", function () {
    projectHidden10.classList.remove("revealProject");
  });
});

//HIDDEN SPECIALTY SECTION//
const projectHidden11 = document.querySelector(".hidden-project__11");
const projectbtn11 = document.querySelector(".btn11");
const projectHidden12 = document.querySelector(".hidden-project__12");
const projectbtn12 = document.querySelector(".btn12");

projectbtn11.addEventListener("click", function () {
  projectHidden11.classList.add("revealProject");
  projectHidden11.addEventListener("click", function () {
    projectHidden11.classList.remove("revealProject");
  });
});
projectbtn12.addEventListener("click", function () {
  projectHidden12.classList.add("revealProject");
  projectHidden12.addEventListener("click", function () {
    projectHidden12.classList.remove("revealProject");
  });
});
