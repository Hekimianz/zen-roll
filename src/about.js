// imports
import table from "./assets/table.png";
import chef from "./assets/chef.jpg";
import sushi from "./assets/sushi.jpg";
// main container
const aboutContainer = document.createElement("section");
aboutContainer.classList.add("aboutContainer");

// main image
const mainImage = document.createElement("img");
mainImage.classList.add("aboutImg");
mainImage.src = table;
aboutContainer.appendChild(mainImage);

// main text
const mainText = document.createElement("p");
mainText.classList.add("aboutText");
mainText.innerHTML =
  "At Zen Roll, we believe that sushi is more than just food—it's an art. Every roll we create is a balance of flavor, freshness, and simplicity, reflecting the zen approach to life. Our focus is on quality ingredients and perfecting every detail, so you can enjoy a truly refined dining experience.";
aboutContainer.appendChild(mainText);

// second image
const secondImg = document.createElement("img");
secondImg.classList.add("aboutImg");
secondImg.src = chef;
aboutContainer.appendChild(secondImg);

// second text
const secondText = document.createElement("p");
secondText.classList.add("aboutText");
secondText.innerHTML =
  "We take pride in sourcing the freshest fish and highest quality ingredients from trusted suppliers. Each ingredient is carefully selected to ensure it meets our standards of taste and purity, bringing the authentic flavors of Japan to your plate.";
aboutContainer.appendChild(secondText);

// third image
const thirdImage = document.createElement("img");
thirdImage.classList.add("aboutImg");
thirdImage.src = sushi;
aboutContainer.appendChild(thirdImage);

// third text
const thirdText = document.createElement("p");
thirdText.classList.add("aboutText");
thirdText.innerHTML =
  "Our chefs meticulously prepare each sushi roll with precision and artistry. From selecting the finest ingredients to mastering every technique, we bring you an authentic sushi experience that’s both fresh and flavorful.";
aboutContainer.appendChild(thirdText);

export function addAbout(container) {
  container.innerHTML = "";
  container.appendChild(aboutContainer);
}
