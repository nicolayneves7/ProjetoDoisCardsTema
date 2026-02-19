const btn = document.querySelector(".toggle-btn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    btn.textContent = "☀️";
  }else{
    btn.textContent = "🌙";
  }
});
const icons = document.querySelectorAll(".info-icon");

icons.forEach(icon => {
  icon.addEventListener("click", (e) => {

    const card = icon.closest(".card");

    // Fecha outros cards
    document.querySelectorAll(".card").forEach(c => {
      if (c !== card) {
        c.classList.remove("active");
      }
    });

    // Abre ou fecha o clicado
    card.classList.toggle("active");

    e.stopPropagation();
  });
});

