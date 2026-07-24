const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeMobileMenu() {
  if (!menuButton || !mobileMenu) return;
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

function setupMobileMenu() {
  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMobileMenu();
    }
  });
}

setupMobileMenu();
initIcons();
