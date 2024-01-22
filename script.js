// VARIABLE DECLARATION

const menuBtn = document.querySelector("#menu-btn");
menu = document.querySelector(".nav ul");
exitBtn = document.querySelector(".exit-btn");
loadMoreBtn = document.querySelector(".load-more-btn");
moreGames = document.querySelectorAll(".more-games");

// NAVIGATION

menuBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(0)";
});

exitBtn.addEventListener("click", () => {
  menu.style.transform = "translateY(-100%)";
});

// LOAD MORE FUNCTION

loadMoreBtn.addEventListener("click", viewMoreGames);

function viewMoreGames() {
  loadMoreBtn.textContent =
    loadMoreBtn.textContent === "Load More" ? "Load Less" : "Load More";

  moreGames.forEach((e) => {
    e.classList.toggle("load-more");
  });
}
