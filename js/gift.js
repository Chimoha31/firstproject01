"use strict";

const dts2 = document.querySelectorAll(".fordt");
dts2.forEach(fordt => {
  fordt.addEventListener("click", ()=> {
    fordt.parentNode.classList.toggle("appear2");


  });
});