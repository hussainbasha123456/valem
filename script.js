// Show Valentine question + buttons
function showOptions() {
    document.getElementById("options").style.display = "block";
  }
  
  // YES button action
  function yesClicked() {
    document.getElementById("options").style.display = "none";
    document.getElementById("finalMessage").style.display = "block";
    startConfetti();
  }
  
  // NO button escape logic (mobile + desktop)
  const noBtn = document.getElementById("noBtn");
  
  function moveButton() {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  }
  
  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
  
  // 🎉 Confetti Celebration
  function startConfetti() {
    for (let i = 0; i < 40; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        ["#ff4d6d", "#ffafcc", "#ffd166", "#cdb4db"][
          Math.floor(Math.random() * 4)
        ];
      confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
      document.body.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 4000);
    }
  }