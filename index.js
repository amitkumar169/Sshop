const nav = document.querySelector(".header");
const navbarCollapser = document.querySelector(".nav__collapser");

navbarCollapser.onclick = () => {
	nav.classList.toggle("nav--expanded");
};