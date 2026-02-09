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
  .then(data => alert("Link sent successfully 💖"));
}
