"use strict";

const dts = document.querySelectorAll("dt");
dts.forEach(dt => {
  dt.addEventListener("click", ()=> {
    dt.parentNode.classList.toggle("appear");

    // dts.forEach(el => {
    //   if(dt !== el){
    //     el.parentNode.classList.remove("appear");
    //   }
    // });⇦タブを閉じたら他のdtが出るようにする命令

  });
});

const dts2 = document.querySelectorAll(".fordt");
dts2.forEach(fordt => {
  fordt.addEventListener("click", ()=> {
    fordt.parentNode.classList.toggle("appear2");


  });
});