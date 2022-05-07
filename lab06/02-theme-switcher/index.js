/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeOcean = () => {
   remove_class();
   document.querySelector(".container").classList.add("ocean");
};

const makeDefault = () => {
   remove_class();
};

const makeDesert = () => {
   remove_class();
   document.querySelector(".container").classList.add("desert");
};

const makeHC = () => {
   remove_class();
   document.querySelector(".container").classList.add("high-contrast");
};

const remove_class = () => {
   var myContainer = document.querySelector(".container").classList;

   if (myContainer.contains("ocean")){
      myContainer.remove("ocean");
   }

   if (myContainer.contains("desert")){
      myContainer.remove("desert");
   }

   if (myContainer.contains("deafult")){
      myContainer.remove("default");
   }

   if (myContainer.contains("high-contrast")){
      myContainer.remove("high-contrast");
   }
};


document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#default').addEventListener('click', makeDefault);
document.querySelector('#desert').addEventListener('click', makeDesert);
document.querySelector('#high-contrast').addEventListener('click', makeHC);
