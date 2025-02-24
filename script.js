//toggle class active

const navbarNAV = document.querySelector(".navbar-nav");

// hamburger klik

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNAV.classList.toggle("active");
};

// hilang

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNAV.contains(e.target)) {
    navbarNAV.classList.remove("active");
  }
});
