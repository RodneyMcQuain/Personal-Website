$(document).ready(function () {
  $("#contact-form").submit(function(event) {
    event.preventDefault();

    let url = "/assets/scripts/php/contactForm.php";
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let submit = document.getElementById("submit").value;
    let dataToSend = {
      "name" : name,
      "email" : email,
      "subject" : subject,
      "message" : message,
      "submit" : submit
    }

    let modalTitle = document.getElementById("modal-title");
    let modalBody = document.getElementById("modal-body");
    modalTitle.innerHTML = "Contact Form";

    $.ajax({
      type: "POST",
      dataType: "text",
      url: url,
      data: dataToSend,
      success: function(responseText) {
        if (responseText == "emailSent") {
          modalBody.innerHTML = "Email sent successfully, thank you.";
          document.getElementById("contact-form").reset();
        } else if (responseText == "invalidEmail")
          modalBody.innerHTML = "Please enter a valid email.";
        else if (responseText == "empty")
          modalBody.innerHTML = "Please do not leave any empty fields.";
        else
          modalBody.innerHTML = "Error sending email, try again. If the error persists you can"
                            + " directly send an email to me at rodneymcquain95@gmail.com.";

        $("#contact-modal").modal("show");
      },
      error: function() {
        modalBody.innerHTML = "Error sending email, try again. If the error persists you can"
                            + " directly send an email to me at rodneymcquain95@gmail.com.";

        $("#contact-modal").modal("show");
      }
    });

    return false;
  });
});
