// Show admin section only if ?admin=true is in URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("admin") === "true") {
  document.getElementById("adminSection").classList.remove("hidden");
}
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const celebration = document.getElementById("celebration");

let yesScale = 1;

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = 100;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  // Make YES button bigger
  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// When YES is clicked
yesBtn.addEventListener("click", () => {
  celebration.classList.remove("hidden");
  launchHearts();
});

// Floating hearts when YES clicked
function launchHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// Email sender
function sendEmail() {
  const email = document.getElementById("emailInput").value;

  fetch("/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      receiverEmail: email,
      websiteLink: window.location.origin
    })
  })
  .then(res => res.json())
  .then(data => alert("Proposal sent to Priya 💌"))
  .catch(err => alert("Error sending email"));
}
