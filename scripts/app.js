const iconMenu = document.querySelector(".icon-menu");
const itemsMenu = document.querySelector(".items-menu");
const items = document.querySelector(".items-menu li");

iconMenu.addEventListener('click', () => {
  itemsMenu.classList.toggle("open");
  items.forEach(item => {
    item.classList.toggle("fade");
  });
});