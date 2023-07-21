const start_button = document.getElementById("start-button");

enableScreen();

function enableScreen() {
  start_button.addEventListener("click", () => {
    document
      .getElementsByClassName("landing-container")[0]
      .classList.add("hidden");
    $("#mobile_screen").load("html/main.html");
  });
}
