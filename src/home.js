import sushiBar from "./assets/sushibar.jpg";
import aboutFish from "./assets/fish.png";
import chopsticks from "./assets/chopsticks.png";

// main container
const homeContainer = document.createElement("section");
homeContainer.classList.add("homeContainer");

// top image
const topImage = document.createElement("img");
topImage.src = sushiBar;
topImage.classList.add("homeImage");
homeContainer.appendChild(topImage);

// welcome text
const welcome = document.createElement("h1");
welcome.innerHTML = "Welcome to <span class='underline'>Zen Roll</span>";
welcome.classList.add("homeWelcome");
homeContainer.appendChild(welcome);
const subWelcome = document.createElement("p");
subWelcome.innerHTML = "Fresh sushi, crafted with care.";
subWelcome.classList.add("subWelcome");
homeContainer.appendChild(subWelcome);

// hero section
const heroContainer = document.createElement("section");
heroContainer.classList.add("homeHeroCont");
homeContainer.appendChild(heroContainer);
// about hero
const aboutHeroCont = document.createElement("div");
aboutHeroCont.classList.add("homeAboutHero");
const aboutImg = document.createElement("img");
aboutImg.classList.add("homeHeroImg", "aboutImg");
aboutImg.src = aboutFish;
aboutHeroCont.appendChild(aboutImg);
const aboutBtn = document.createElement("button");
aboutBtn.classList.add("heroBtns");
aboutBtn.innerHTML = "About Us";
aboutHeroCont.appendChild(aboutBtn);
heroContainer.appendChild(aboutHeroCont);
// menu hero
const menuHeroCont = document.createElement("div");
menuHeroCont.classList.add("homeMenuHero");
const menuImg = document.createElement("img");
menuImg.classList.add("homeHeroImg");
menuImg.src = chopsticks;
menuHeroCont.appendChild(menuImg);
const menuBtn = document.createElement("button");
menuBtn.classList.add("heroBtns", "menuBtn");
menuBtn.innerHTML = "Menu";
menuHeroCont.appendChild(menuBtn);
heroContainer.appendChild(menuHeroCont);
export function addHome(container) {
  container.innerHTML = "";
  container.appendChild(homeContainer);
}
