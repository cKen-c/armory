document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.querySelector(".navbar-right .material-symbols-outlined:last-child");
  const searchBar = document.getElementById("searchBar");
  const closeSearch = document.getElementById("closeSearch");

  searchIcon.addEventListener("click", () => {
    searchBar.classList.add("show");
  });

  closeSearch.addEventListener("click", () => {
    searchBar.classList.remove("show");
  });
});