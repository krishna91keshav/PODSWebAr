AFRAME.registerComponent("menu-manager", {
  init() {
    const modelList = ["containerModel", "containerModel1", "containerModel2"];
    const planeList = ["plane", "plane1", "plane2"];
    const model = document.getElementById("container");
    const plane = document.getElementById("marker");
    const podzilla = document.getElementById("cage");
    const sceneID = document.getElementById("sceneID");
    const button1 = document.getElementById("8FT_Button");
    const button2 = document.getElementById("12FT_Button");
    const button3 = document.getElementById("16FT_Button");
    const button4 = document.getElementById("restart_Button");
    const button5 = document.getElementById("podzilla-button");
    // const button5 = document.getElementById("actionButton");
    const container_Menu = document.getElementById("container-menu");

    let idx = 0;
    let is_Placed = false;
    let toggle = false;

    // button5.classList.add("actionButton");

    button1.addEventListener("click", (event) => {
      is_Placed = true;
      this.el.sceneEl.emit("recenter");
      sceneID.setAttribute("coaching-overlay", "disablePrompt: false");
      button1.classList.add("screenbutton2selected");
      button2.classList.remove("screenbutton2selected");
      button3.classList.remove("screenbutton2selected");
      container_Menu.classList.add("hidden");
      if (idx !== 0) {
        model.removeAttribute("gltf-model");
        model.setAttribute("gltf-model", `#${modelList[0]}`);
        plane.removeAttribute("gltf-model");
        plane.setAttribute("gltf-model", `#${planeList[0]}`);
        idx = 0;
      }
    });

    button2.addEventListener("click", (event) => {
      is_Placed = true;
      this.el.sceneEl.emit("recenter");
      sceneID.setAttribute("coaching-overlay", "disablePrompt: false");
      button1.classList.remove("screenbutton2selected");
      button2.classList.add("screenbutton2selected");
      button3.classList.remove("screenbutton2selected");
      container_Menu.classList.add("hidden");
      if (idx !== 1) {
        model.removeAttribute("gltf-model");
        model.setAttribute("gltf-model", `#${modelList[1]}`);
        plane.removeAttribute("gltf-model");
        plane.setAttribute("gltf-model", `#${planeList[1]}`);
        idx = 1;
      }
    });

    button3.addEventListener("click", (event) => {
      is_Placed = true;
      this.el.sceneEl.emit("recenter");
      sceneID.setAttribute("coaching-overlay", "disablePrompt: false");
      button1.classList.remove("screenbutton2selected");
      button2.classList.remove("screenbutton2selected");
      button3.classList.add("screenbutton2selected");
      container_Menu.classList.add("hidden");
      if (idx !== 2) {
        model.removeAttribute("gltf-model");
        model.setAttribute("gltf-model", `#${modelList[2]}`);
        plane.removeAttribute("gltf-model");
        plane.setAttribute("gltf-model", `#${planeList[2]}`);
        idx = 2;
      }
    });

    button4.addEventListener("click", (event) => {
      this.el.sceneEl.emit("recenter");
    });

    button5.addEventListener("click", (event) => {
      if (!toggle) {
        podzilla.setAttribute("visible", "true");
        toggle = true;
      } else {
        podzilla.setAttribute("visible", "false");
        toggle = false;
      }
    });

    this.el.sceneEl.addEventListener("coaching-overlay.show", () => {
      model.setAttribute("visible", "false");
      document.getElementById("mini-menu").classList.add("hidden");
      document.getElementById("options-menu").classList.add("hidden");
      document.getElementById("guidelines-menu").classList.add("hidden");
      document.getElementById("recorder").classList.add("hidden");
      // model.setAttribute('model-opacity', '0.5')
    });

    this.el.sceneEl.addEventListener("coaching-overlay.hide", () => {
      if (is_Placed) {
        document.getElementById("mini-menu").classList.remove("hidden");
        model.setAttribute("visible", "true");
      }
    });
  },
});
