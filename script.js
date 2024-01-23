// VARIABLE DECLARATION

const menuBtn = document.querySelector("#menu-btn");
menu = document.querySelector(".nav ul");
exitBtn = document.querySelector(".exit-btn");
showMoreBtn = document.querySelector(".showMoreBtn");
hiddenGames = document.querySelectorAll(".game.hidden");

// NAVIGATION

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(0)";
});

exitBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(-100%)";
});

// SHOW MORE GAMES

function showMoreGames() {
  hiddenGames.forEach((game) => {
    game.classList.remove("hidden");
  });

  showMoreBtn.textContent =
    showMoreBtn.textContent === "See All" ? "See Less" : "See All";

  showMoreBtn.textContent === "See All"
    ? hiddenGames.forEach((game) => game.classList.add("hidden"))
    : null;
}

showMoreBtn.addEventListener("click", showMoreGames);
