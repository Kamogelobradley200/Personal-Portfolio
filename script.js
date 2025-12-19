const heading = document.querySelector(".home-content h2");
const myName = "Kamogelo Bradley Mosehle";
let i = 0;
const speed = 150;

heading.textContent = "";

function typeEffect() {
  if (i < myName.length) {
    heading.textContent += myName.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  }
}
typeEffect();
