const dr = document.querySelectorAll(".drums");

function removetransition(e) {
  if (e.propertyName == "transform") {
    e.target.classList.remove("playing");
  }
}

function playmusic(e) {
  const drum = document.querySelector(`.drums[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (drum) {
    drum.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
}

dr.forEach((d) => {
  d.addEventListener("click", () => {
    d.classList.add("playing");
    const a = document.querySelector(
      `audio[data-key="${d.getAttribute("data-key")}"]`
    );
    a.currentTime = 0;
    a.play();
  });
  d.addEventListener("transitionend", removetransition);
});

window.addEventListener("keydown", playmusic);
