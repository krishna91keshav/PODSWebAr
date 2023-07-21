window.mobilecheck = function detectMobile() {
  let isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  if (!isMobile) {
    const IS_MAC = RegExp(/Macintosh/i).test(navigator.userAgent);
    if (IS_MAC && navigator.maxTouchPoints && navigator.maxTouchPoints > 2) {
      isMobile = true;
    }
  }
  return isMobile;
};

if (window.mobilecheck()) {
  document
    .getElementsByClassName("landing-container")[0]
    .classList.remove("hidden");
} else {
  document
    .getElementsByClassName("landing-container")[0]
    .classList.add("hidden");
  $("#desktop-screen").load("html/desktop-screen.html");
  document
    .getElementsByClassName("landing-container")[0]
    .classList.add("hidden");
}
