document.addEventListener("DOMContentLoaded", function () {
  // JOIN NOW BUTTON
  const joinBtn = document.querySelector(".hero button");

  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      alert(
        "Thanks for your interest! 💪\nVisit our gym or contact us to join.",
      );
    });
  }

  // CARD HOVER EFFECT
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
    });
  });

  // ❌ NO nav click JS — browser handles navigation
});
