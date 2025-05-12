const eye = document.getElementById("eye");
const content = document.getElementById("hiddenContent");
const closeBtn = document.getElementById("closeBtn");

eye.addEventListener("click", () => {
  content.classList.add("revealed");
  eye.style.display = "none";
  bgMusic.play().catch(() => {});
});

closeBtn.addEventListener("click", () => {
  content.classList.remove("revealed");
  eye.style.display = "block";
});

const discordIcon = document.querySelector(".copy-discord");
const discordTooltip = document.getElementById("discordTooltip");

discordIcon.addEventListener("click", () => {
  const discordTag = "urikiro";
  navigator.clipboard.writeText(discordTag).then(() => {
    discordTooltip.textContent = "Copied!";
    setTimeout(() => {
      discordTooltip.textContent = `Click to copy: ${discordTag}`;
    }, 2000);
  });
});

const bgMusic = document.getElementById("bgMusic");
const toggleAudio = document.getElementById("toggleAudio");
const volumeSlider = document.getElementById("volumeSlider");

// Set default volume
bgMusic.volume = 0.0025;
volumeSlider.value = 0.0025;

// Toggle mute/unmute
toggleAudio.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  toggleAudio.textContent = bgMusic.muted ? "🔇" : "🔈";
});

// Volume slider control
volumeSlider.addEventListener("input", () => {
  bgMusic.volume = parseFloat(volumeSlider.value);
});
