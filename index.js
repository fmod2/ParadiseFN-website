// Scroll to top button functionality
const scrollToTopButton = document.getElementById("scroll-to-top");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.addEventListener("click", function() {
  document.documentElement.scrollTop = 0;
});

// Smooth scrolling animation for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offsetTop = target.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  });
});

// Hamburger menu functionality for mobile navigation
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

hamburgerMenu.addEventListener("click", function() {
  navLinks.classList.toggle("show");
});