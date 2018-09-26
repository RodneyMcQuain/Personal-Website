<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $emailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (empty($name) || empty($emailFrom) || empty($subject) || empty($message)) {
      echo "empty";
      exit;
    }

    if (!empty($emailFrom) && !filter_var($emailFrom, FILTER_VALIDATE_EMAIL)) {
      echo "invalidEmail";
      exit;
    }

    $mailTo = "rodneymcquain95@gmail.com";
    $headers = 'MIME-Version: 1.0' . "\r\n" .
               'Content-type: text/html; charset=iso-8859-1' . "\r\n" .
               'X-Priority: 1' . "\r\n" .
               'From: ' .$emailFrom. "\r\n" .
               'Reply-To: ' .$emailFrom. "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    $txt = "Received an email from " .$name. " at " .$emailFrom. " from My Website <br/><br/>" .$message;

    if (mail($mailTo, $subject, $txt, $headers)) {
      echo "emailSent";
      exit;
    } else {
      echo "emailNotSent";
      exit;
    }
  } else {
    echo "nope";
  }
?>
