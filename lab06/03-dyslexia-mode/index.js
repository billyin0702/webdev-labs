/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


const toggleDys = () => {
  var myContainer = document.querySelector(".container").classList;

  if (myContainer.contains("dyslexia-mode")){
     myContainer.remove("dyslexia-mode");
     window.localStorage.setItem('dyslexia', 'false');
  }
  else{
    myContainer.add("dyslexia-mode");
    window.localStorage.setItem('dyslexia', 'true');
  }
};


// Sets the isPressed button
const isPressed = window.localStorage.getItem('dyslexia') === 'true';

if(isPressed) {
    document.querySelector('body').classList.add('dyslexia-mode');
}


// button
document.querySelector('#dyslexia-toggle').addEventListener('click', toggleDys);