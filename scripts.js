// scripts.js

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const processNumber = document.getElementById("processNumber").value;
  const who = document.getElementById("who").value;
  const message = document.getElementById("message").value;
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    processNumber: processNumber,
    who: who,
    message: message
  }).then(function(response) {
    alert("Tilbakemelding sendt!");
  }, function(error) {
    alert("Det oppstod en feil: " + JSON.stringify(error));
  });
  document.getElementById("myForm").reset();
});

function toggleFeedbackForm() {
  const form = document.getElementById("feedback-form");
  const overlay = document.getElementById("overlay");
  const isVisible = form.style.display === "block";
  form.style.display = isVisible ? "none" : "block";
  overlay.style.display = isVisible ? "none" : "block";
}
