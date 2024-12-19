<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mno = $_POST['mno'];
    $msg = $_POST['msg'];

    $name = htmlspecialchars($name);
    $email = htmlspecialchars($email);
    $mno = htmlspecialchars($mno);
    $msg = htmlspecialchars($msg);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format!";
        exit;
    }

    echo "<h2>Form Submitted Successfully!</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Phone Number: $mno</p>";
    echo "<p>Message: $msg</p>";
}
?>
