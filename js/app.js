const menuLink = document.querySelector("header a");
const menuList = document.querySelector("header ul");

menuLink.addEventListener("click", () => {
  menuList.classList.toggle("hide");
});
