const makeBigger = () => {
   let h1 = document.querySelector("h1");
   let fontSize = window.getComputedStyle(h1, null).getPropertyValue("font-size");
   fontSize = parseFloat(fontSize);
   h1.style.fontSize = (fontSize + 5) + "px";

   let content = document.querySelector(".content");
   fontSize = window.getComputedStyle(content, null).getPropertyValue("font-size");
   fontSize = parseFloat(fontSize);
   content.style.fontSize = (fontSize + 5) + "px";
};

const makeSmaller = () => {
   let h1 = document.querySelector("h1")
   let fontSize = window.getComputedStyle(h1, null).getPropertyValue("font-size");
   fontSize = parseFloat(fontSize);
   h1.style.fontSize = (fontSize - 5) + "px";

   let content = document.querySelector(".content")
   fontSize = window.getComputedStyle(content, null).getPropertyValue("font-size");
   fontSize = parseFloat(fontSize);
   content.style.fontSize = (fontSize - 5) + "px";
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

