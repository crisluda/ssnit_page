const one = document.querySelector(".one");
one.addEventListener("dblclick", () => {
  //   one.style.width = "1600px";
  //   one.style.height = "900px";
  //   console.log(window.screen.width, window.screen.height);
  one.requestFullscreen();
  if (one.requestFullscreen) {
    one.exitfullscreen();
  } else if (one.webkitRequestFullscreen) {
    /* Safari */
    one.webkitRequestFullscreen();
  } else if (one.msRequestFullscreen) {
    /* IE11 */
    one.msRequestFullscreen();
  }
});
