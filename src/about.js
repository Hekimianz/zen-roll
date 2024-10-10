const aboutContainer = document.createElement("section");
aboutContainer.classList.add("aboutContainer");
const p = document.createElement("p");
p.innerHTML = "About tab goes here! Working on it!";
aboutContainer.appendChild(p);

export function addAbout(container) {
  container.innerHTML = "";
  container.appendChild(aboutContainer);
}
