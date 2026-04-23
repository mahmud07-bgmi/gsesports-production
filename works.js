document.addEventListener("mousemove", (e) => {
  document.documentElement.style.setProperty("--x", e.clientX + "px");
  document.documentElement.style.setProperty("--y", e.clientY + "px");
});

const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const hoverTargets = document.querySelectorAll(".tilt-card, .watch, .nav-links a, .socials a, .ig, .btn");

  hoverTargets.forEach((item) => {
    item.addEventListener("mouseenter", () => cursor.classList.add("active"));
    item.addEventListener("mouseleave", () => cursor.classList.remove("active"));
  });
}

const cards = document.querySelectorAll(".tilt-card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 720) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 7;
    const rotateX = ((centerY - y) / centerY) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});