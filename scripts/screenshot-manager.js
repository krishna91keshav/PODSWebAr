AFRAME.registerComponent("screenshot-manager", {
  init() {
    const screenshot_button = document.getElementById("screenshot-button");
    const recorder_button = document.getElementById("recorder");
    const preview_close_button = document.getElementById("closePreviewButton");
    const options_menu = document.getElementById("options-menu");
    const mini = document.getElementById("mini-menu");

    recorder_button.classList.add("hidden");

    screenshot_button.addEventListener("click", () => {
      mini.classList.add("hidden");
      options_menu.classList.add("hidden");
      recorder_button.classList.remove("hidden");
    });

    preview_close_button.addEventListener("click", () => {
      recorder_button.classList.add("hidden");
      options_menu.classList.remove("hidden");
    });
  },
});
