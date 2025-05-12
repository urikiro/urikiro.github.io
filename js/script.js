const eye = document.getElementById("eye");
const content = document.getElementById("hiddenContent");
const closeBtn = document.getElementById("closeBtn");

eye.addEventListener("click", () => {
  content.classList.add("revealed");
  eye.style.display = "none";
<<<<<<< HEAD
  bgMusic.play().catch(() => {});
=======
>>>>>>> abe6ce064f60e0d5216100cd62ca7dc692776014
});

closeBtn.addEventListener("click", () => {
  content.classList.remove("revealed");
  eye.style.display = "block";
});
<<<<<<< HEAD

=======
>>>>>>> abe6ce064f60e0d5216100cd62ca7dc692776014
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
<<<<<<< HEAD

const bgMusic = document.getElementById("bgMusic");
const toggleAudio = document.getElementById("toggleAudio");
const volumeSlider = document.getElementById("volumeSlider");

// Set default volume
bgMusic.volume = 0.0025;
volumeSlider.value = 0.0025;

// Toggle mute/unmute
=======
const bgMusic = document.getElementById("bgMusic");
const toggleAudio = document.getElementById("toggleAudio");

bgMusic.volume = 0.001;
eye.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
});
>>>>>>> abe6ce064f60e0d5216100cd62ca7dc692776014
toggleAudio.addEventListener("click", () => {
  bgMusic.muted = !bgMusic.muted;
  toggleAudio.textContent = bgMusic.muted ? "🔇" : "🔈";
});
<<<<<<< HEAD

// Volume slider control
volumeSlider.addEventListener("input", () => {
  bgMusic.volume = parseFloat(volumeSlider.value);
});
=======
>>>>>>> abe6ce064f60e0d5216100cd62ca7dc692776014
