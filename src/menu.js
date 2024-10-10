const menuContainer = document.createElement("section");
menuContainer.classList.add("menuContainer");
const p = document.createElement("p");
p.innerHTML = "Menu tab goes here! Working on it!";
menuContainer.appendChild(p);

export function addMenu(container) {
  container.innerHTML = "";
  container.appendChild(menuContainer);
}
