// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(5, 8, 22, 0.9)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
  } else {
    header.style.background = "rgba(255,255,255,0.05)";
    header.style.boxShadow = "none";
  }
});

// Card hover animation
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(56,189,248,0.15),
        rgba(255,255,255,0.05)
      )
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255,255,255,0.05)";
  });
});