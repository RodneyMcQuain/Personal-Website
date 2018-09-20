window.onload = function () {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var subject = document.getElementById("subject");
  var message = document.getElementById("message");
  var validationText = document.getElementById("validation-text")

  addKeyUpListeners();
  addFocusOutListeners();
  addFocusInListeners();

  function addKeyUpListeners() {
    name.addEventListener("keyup", e => {
      keyUpEvent();
    });

    email.addEventListener("keyup", e => {
      keyUpEvent();
    });

    subject.addEventListener("keyup", e => {
      keyUpEvent();
    });

    message.addEventListener("keyup", e => {
      keyUpEvent();
    });

    function keyUpEvent() {
      let isEmpty = checkEmpty();

      if (!isEmpty) {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!email.value.match(emailRegex)) {
          validationText.style.display = "block";
          validationText.innerHTML = "Please provide a valid email.";
        } else {
          validationText.style.display = "none";
        }
      }
    }

    function checkEmpty() {
      let isEmpty = false;

      if (name.value.trim() == "" || email.value.trim() == "" || subject.value.trim() == "" || message.value.trim() == "") {
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
    name.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    email.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    subject.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });

    message.addEventListener("focusout", e => {
      validationText.style.display = "none";
    });
  }

  function addFocusInListeners() {
    name.addEventListener("focusin", e => {
      focusInEvent();
    });

    email.addEventListener("focusin", e => {
      focusInEvent();
    });

    subject.addEventListener("focusin", e => {
      focusInEvent();
    });

    message.addEventListener("focusin", e => {
      focusInEvent();
    });

    function focusInEvent() {
      if (isError()) {
        validationText.style.display = "block";
      }
    }

    function isError() {
      let isError = false;

      if (!validationText.innerHTML == "")
        isError = true;

      return isError;
    }
  }
}
