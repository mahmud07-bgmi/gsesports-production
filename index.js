document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");

  let mouseX = 0;
  let mouseY = 0;
  let ticking = false;

  document.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--x", mouseX + "px");
        document.documentElement.style.setProperty("--y", mouseY + "px");

        if (cursor) {
          cursor.style.transform =
            `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        }

        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });

  if (cursor) {
    const hoverTargets = document.querySelectorAll(
      ".tilt-card, .nav-links a, .socials a, .btn"
    );

    hoverTargets.forEach((item) => {
      item.addEventListener("mouseenter", () => cursor.classList.add("active"));
      item.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });
  }

  const cards = document.querySelectorAll(".tilt-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth <= 768) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 6;
      const rotateX = ((centerY - y) / centerY) * 6;

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });

  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 20px rgba(0,200,255,0.45)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "";
    });
  });
});
