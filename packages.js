document.addEventListener("DOMContentLoaded", () => {
  // Mouse glow background
  document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
  });

  // Custom cursor
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const hoverTargets = document.querySelectorAll(
      ".card, .terms-section, .btn, .nav-links a, .socials a"
    );

    hoverTargets.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
      });

      item.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
      });
    });
  }

  // Tilt effect
  const tiltCards = document.querySelectorAll(".tilt-card, .card, .terms-section");

  tiltCards.forEach((card) => {
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

  // Button hover glow
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 20px rgba(255,0,0,0.25)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "";
    });
  });
});