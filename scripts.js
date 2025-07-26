// scripts.js

// Eventlistener for skjemaet
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const processNumber = document.getElementById("processNumber").value;
  const who = document.getElementById("who").value;
  const message = document.getElementById("message").value;

  // Send e-post via EmailJS med dine ID-er
  emailjs.send("service_rclhyuc", "template_f8ztu7d", {
    processNumber: processNumber,
    who: who,
    message: message
  }).then(function(response) {
    alert("Tilbakemelding sendt!");
  }, function(error) {
    alert("Feil oppstod: " + JSON.stringify(error));
  });

  // Resett skjema
  document.getElementById("myForm").reset();
});

// Funksjon for å vise/skjule skjema
function toggleFeedbackForm() {
  const form = document.getElementById("feedback-form");
  const overlay = document.getElementById("overlay");
  const isVisible = form.style.display === "block";

  if (isVisible) {
    form.style.display = "none";
    overlay.style.display = "none";
  } else {
    form.style.display = "block";
    overlay.style.display = "block";
  }
}

// Initialiser EmailJS med din User ID (Public Key)
emailjs.init("yvY21hA8XaG3QMy2");
