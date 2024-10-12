import "./styles.css";
import { addHome } from "./home";
import { addAbout } from "./about";
import { addMenu } from "./menu";
const container = document.querySelector("#content");
const homeTab = document.querySelector(".home--tab");
const aboutTab = document.querySelector(".about--tab");
const menuTab = document.querySelector(".menu--tab");
let currentTab = "home";
addHome(container);
updateCurrTab();

const aboutBtn = document.querySelector(".aboutBtn");
const menuBtn = document.querySelector(".menuBtn");

aboutBtn.addEventListener("click", () => {
  addAbout(container);
  currentTab = "about";
  updateCurrTab();
});
menuBtn.addEventListener("click", () => {
  addMenu(container);
  currentTab = "menu";
  updateCurrTab();
});

function updateCurrTab() {
  if (currentTab === "home") {
    homeTab.classList.add("active");
    aboutTab.classList.remove("active");
    menuTab.classList.remove("active");
  } else if (currentTab === "about") {
    homeTab.classList.remove("active");
    aboutTab.classList.add("active");
    menuTab.classList.remove("active");
  } else if (currentTab === "menu") {
    homeTab.classList.remove("active");
    aboutTab.classList.remove("active");
    menuTab.classList.add("active");
  }
}

homeTab.addEventListener("click", () => {
  addHome(container);
  currentTab = "home";
  updateCurrTab();
});

aboutTab.addEventListener("click", () => {
  addAbout(container);
  currentTab = "about";
  updateCurrTab();
});

menuTab.addEventListener("click", () => {
  addMenu(container);
  currentTab = "menu";
  updateCurrTab();
});
