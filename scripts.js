// scripts.js

// Event listener for skjemaet
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const processNumber = document.getElementById("processNumber").value;
  const who = document.getElementById("who").value;
  const message = document.getElementById("message").value;

  // Send e-post via EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    processNumber: processNumber,
    who: who,
    message: message
  }).then(function(response) {
    alert("Tilbakemelding sendt!");
  }, function(error) {
    alert("Det oppstod en feil: " + JSON.stringify(error));
  });

  // Nullstill skjemaet etter sending
  document.getElementById("myForm").reset();
});

// Funksjon for å vise/skjule tilbakemeldingsskjemaet
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
