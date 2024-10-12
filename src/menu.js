const menuContainer = document.createElement("section");
menuContainer.classList.add("menuContainer");

// inner containers
const rollsCont = document.createElement("section");
rollsCont.classList.add("rollsCont");
menuContainer.appendChild(rollsCont);
const sashimiCont = document.createElement("section");
sashimiCont.classList.add("sashimiCont");
menuContainer.appendChild(sashimiCont);
const specialsCont = document.createElement("section");
specialsCont.classList.add("specialsCont");
menuContainer.appendChild(specialsCont);

// rolls menu
const rollsHead = document.createElement("h2");
rollsHead.classList.add("menuHead");
rollsHead.innerHTML = "ROLLS";
rollsCont.appendChild(rollsHead);
const rollsItems = {
  "Zen Spicy Roll": 12,
  "Rainbow Roll": 15,
  "California Roll": 10,
  "Spicy Tuna Roll": 13,
  "Dragon Roll": 16,
  "Veggie Delight Roll": 9,
  "Tempura Shrimp Roll": 14,
  "Volcano Roll": 17,
};
for (const roll in rollsItems) {
  const item = document.createElement("h3");
  item.classList.add("itemTitle");
  item.innerHTML = `${roll}: $${rollsItems[roll].toFixed(2)}`;
  rollsCont.appendChild(item);
}
// sashimi menu
const sashimiHead = document.createElement("h2");
sashimiHead.classList.add("menuHead");
sashimiHead.innerHTML = "SASHIMI";
sashimiCont.appendChild(sashimiHead);
const sashimiItems = {
  "Tuna Sashimi": 15,
  "Salmon Sashimi": 14,
  "Yellowtail Sashimi": 16,
  "Octopus Sashimi": 13,
  "Mackerel Sashimi": 12,
  "Shrimp Sashimi": 12,
  "Sea Bream Sashimi": 14,
  "Assorted Sashimi Platter": 22,
};

for (const sashimi in sashimiItems) {
  const item = document.createElement("h3");
  item.classList.add("itemTitle");
  item.innerHTML = `${sashimi}: $${sashimiItems[sashimi].toFixed(2)}`;
  sashimiCont.appendChild(item);
}

// specials menu
const specialsHead = document.createElement("h2");
specialsHead.classList.add("menuHead");
specialsHead.innerHTML = "SPECIALS";
specialsCont.appendChild(specialsHead);
const specialsItems = {
  "Chef's Special Roll": 18,
  "Spicy Sashimi Salad": 16,
  "Miso Soup with Tofu": 5,
  "Tempura Platter": 20,
  "Signature Bento Box": 22,
  "Sushi and Sashimi Combo": 25,
  "Udon Noodle Soup": 14,
  "Crispy Ebi Tacos": 12,
};

for (const special in specialsItems) {
  const item = document.createElement("h3");
  item.classList.add("itemTitle");
  item.innerHTML = `${special}: $${specialsItems[special].toFixed(2)}`;
  specialsCont.appendChild(item);
}

export function addMenu(container) {
  container.innerHTML = "";
  container.appendChild(menuContainer);
}
