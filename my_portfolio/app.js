// Initialize EmailJS with your user ID
(function () {
    emailjs.init("qHHuV8qmQsBcHWhLE");
  })();
  
  // Function to send email using EmailJS
  document
    .getElementById("contact")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Send the email using the form data
  
      emailjs.sendForm("service_3s38b1f", "template_tl8pxeu", this).then(
        function () {
          alert("Message Sent Successfully!");
        },
        function (error) {
          alert("Failed to send the message: " + JSON.stringify(error));
        }
      );
    });
  