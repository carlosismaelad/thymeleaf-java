document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("rolagem");
  const body = document.body;

  function openNav() {
    menu.classList.remove("top-[-100%]");
    menu.classList.add("top-0");
    openMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  }

  function closeNav() {
    menu.classList.add("top-[-100%]");
    menu.classList.remove("top-0");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  }

  function showNavOnScroll() {
    if (window.scrollY > 0) {
      nav.classList.add("bg-slate-900");
    } else {
      nav.classList.remove("bg-slate-900");
    }
  }

  // Eventos para abrir e fechar o menu
  openMenu.addEventListener("click", openNav);
  closeMenu.addEventListener("click", closeNav);

  // Evento para modificar a navbar ao rolar a página
  window.addEventListener("scroll", showNavOnScroll);
});
