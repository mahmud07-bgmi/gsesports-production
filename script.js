const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

reveals.forEach((item) => observer.observe(item));

const mouseGlow = document.querySelector(".mouse-glow");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateGlow() {
  currentX += (mouseX - currentX) * 0.12;
  currentY += (mouseY - currentY) * 0.12;

  mouseGlow.style.left = currentX + "px";
  mouseGlow.style.top = currentY + "px";

  requestAnimationFrame(animateGlow);
}

animateGlow();

document.addEventListener("mousedown", () => {
  mouseGlow.style.width = "280px";
  mouseGlow.style.height = "280px";
});

document.addEventListener("mouseup", () => {
  if (window.innerWidth <= 760) {
    mouseGlow.style.width = "160px";
    mouseGlow.style.height = "160px";
  } else {
    mouseGlow.style.width = "220px";
    mouseGlow.style.height = "220px";
  }
});
