// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// dark mode toggle

const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// sesuaikan mode

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// paralax
const divRL = document.querySelector(".div-RL");
const aboutR = document.querySelector(".about-right");
const aboutL = document.querySelector(".about-left");
const about = document.getElementById("about").offsetTop;

window.addEventListener("load", () => {
  divRL.classList.add("div-show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= about - 660) {
    aboutR.classList.add("about-show");
    aboutL.classList.add("about-show");
  } else {
    aboutR.classList.remove("about-show");
    aboutL.classList.remove("about-show");
  }
});

// indicator current page
const home = document.getElementById("home").offsetTop;
const portfolio = document.getElementById("portfolio").offsetTop;
const clients = document.getElementById("clients").offsetTop;
const blog = document.getElementById("blog").offsetTop;
const contact = document.getElementById("contact").offsetTop;

const navHome = document.querySelector(".home");
const navAbout = document.querySelector(".about");
const navPort = document.querySelector(".portfolio");
const navClient = document.querySelector(".client");
const navBlog = document.querySelector(".blog");
const navContact = document.querySelector(".contact");

window.addEventListener("scroll", () => {
  let wScroll = window.scrollY + 200;

  if (wScroll >= home) {
    navHome.classList.add("active");
    navHome.classList.remove("dark:text-white");
  }
  if (wScroll - 200 === home) {
    navHome.classList.remove("active");
    navHome.classList.add("dark:text-white");
  }

  if (wScroll - 150 >= about) {
    navHome.classList.remove("active");
    navHome.classList.add("dark:text-white");
    navAbout.classList.remove("dark:text-white");
    navAbout.classList.add("active");
  }
  if (wScroll < about) {
    navAbout.classList.add("dark:text-white");
    navAbout.classList.remove("active");
  }

  if (wScroll >= portfolio) {
    navAbout.classList.add("dark:text-white");
    navAbout.classList.remove("active");
    navPort.classList.add("active");
    navPort.classList.remove("dark:text-white");
  }
  if (wScroll < portfolio) {
    navPort.classList.add("dark:text-white");
    navPort.classList.remove("active");
  }

  if (wScroll >= clients) {
    navPort.classList.add("dark:text-white");
    navPort.classList.remove("active");
    navClient.classList.add("active");
    navClient.classList.remove("dark:text-white");
  }
  if (wScroll < clients) {
    navClient.classList.add("dark:text-white");
    navClient.classList.remove("active");
  }

  if (wScroll >= blog) {
    navClient.classList.add("dark:text-white");
    navClient.classList.remove("active");
    navBlog.classList.add("active");
    navBlog.classList.remove("dark:text-white");
  }
  if (wScroll < blog) {
    navBlog.classList.add("dark:text-white");
    navBlog.classList.remove("active");
  }

  if (wScroll >= contact) {
    navBlog.classList.add("dark:text-white");
    navBlog.classList.remove("active");
    navContact.classList.add("active");
    navContact.classList.remove("dark:text-white");
  }
  if (wScroll < contact) {
    navContact.classList.add("dark:text-white");
    navContact.classList.remove("active");
  }
});
