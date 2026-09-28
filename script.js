const menuButton = document.querySelector(".menu");
const mainNav = document.querySelector("#menu-principal");

const closeMenu = () => {
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  mainNav.classList.remove("open");
};

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Abrir menu" : "Fechar menu");
  mainNav.classList.toggle("open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target instanceof Element && event.target.closest("a")?.hash) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
