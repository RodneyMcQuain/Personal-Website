document.addEventListener("DOMContentLoaded", function(event) {
  let tfName = document.getElementById("name");
  let tfEmail = document.getElementById("email");
  let tfSubject = document.getElementById("subject");
  let tfMessage = document.getElementById("message");
  let btnSend = document.getElementById("submit");
  let validationText = document.getElementById("validation-text")

  addKeyUpListeners();
  addFocusOutListeners();
  addFocusInListeners();

  function addKeyUpListeners() {
    tfName.addEventListener("keyup", e => {
      keyUpEvent();
    });

    email.addEventListener("keyup", e => {
      keyUpEvent();
    });

    tfSubject.addEventListener("keyup", e => {
      keyUpEvent();
    });

    tfMessage.addEventListener("keyup", e => {
      keyUpEvent();
    });

    function keyUpEvent() {
      if (!isEmpty()) {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!tfEmail.value.match(emailRegex)) {
          validationText.style.display = "block";
          validationText.innerHTML = "Please provide a valid email.";
        } else {
          validationText.style.display = "none";
        }
      }
    }

    function isEmpty() {
      let isEmpty = false;

      if (tfName.value.trim() == "" || tfEmail.value.trim() == "" || tfSubject.value.trim() == "" || tfMessage.value.trim() == "") {
        validationText.style.display = "block";
        validationText.innerHTML = "Please fill in empty fields.";
        isEmpty = true;
      } else {
        validationText.style.display = "none";
        validationText.innerHTML = "";

      }

      return isEmpty;
    }
  }

  function addFocusOutListeners() {
    tfName.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    tfEmail.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    tfSubject.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    tfMessage.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });
  }

  function addFocusInListeners() {
    tfName.addEventListener("focusin", e => {
      focusInEvent();
    });

    tfEmail.addEventListener("focusin", e => {
      focusInEvent();
    });

    tfSubject.addEventListener("focusin", e => {
      focusInEvent();
    });

    tfMessage.addEventListener("focusin", e => {
      focusInEvent();
    });

    function focusInEvent() {
      if (isError())
        validationText.style.display = "block";
    }

    function isError() {
      let isError = false;

      if (!validationText.innerHTML == "")
        isError = true;

      return isError;
    }
  }
});
