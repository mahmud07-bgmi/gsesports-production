/* ============================= */
/*   GS CURSOR + EFFECT SYSTEM   */
/* ============================= */

document.addEventListener("DOMContentLoaded", () => {

  const cursor = document.querySelector(".cursor");

  let mouseX = 0;
  let mouseY = 0;
  let ticking = false;

  /* ===== Mouse Move (Optimized) ===== */
  document.addEventListener("pointermove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (!ticking) {
      requestAnimationFrame(() => {

        /* 🔥 Background Glow */
        document.documentElement.style.setProperty("--x", mouseX + "px");
        document.documentElement.style.setProperty("--y", mouseY + "px");

        /* 🔥 Cursor (NO DELAY) */
        if (cursor) {
          cursor.style.transform =
            `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
        }

        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });


  /* ===== Cursor Hover Effect ===== */
  if (cursor) {
    const hoverTargets = document.querySelectorAll(
      ".tilt-card, .watch, .nav-links a, .socials a, .ig, .btn"
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


  /* ===== Tilt Effect ===== */
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

      card.style.transform =
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });

  });

});
