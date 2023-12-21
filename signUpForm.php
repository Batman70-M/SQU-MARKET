<?php

// Get the data from the html form and assign them to variables
$email = $_POST["email"];
$password = $_POST["password"];

// Create table for the data of the form
echo "<table border='border' style='border-collapse : collapse; border: 1px solid black;' cellpadding = '5' cellspacing = '0'>";

// Create row for the email data of the form and display the email
echo "<tr>";
echo "<th> Email </th>";
echo "<td>" . $email . "</td>";
echo "</tr>";

// Create row for the password data of the form and display the password
echo "<tr>";
echo "<th> Password </th>";
echo "<td>" . $password . "</td>";
echo "</tr>";

?>