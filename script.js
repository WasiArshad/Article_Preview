const buttons = document.querySelector(".share-btn");

buttons.addEventListener("click", (e) => {
  const showPopup = document.getElementById("hidden");
  showPopup.classList.toggle("link-style");
});
