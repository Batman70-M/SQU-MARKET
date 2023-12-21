<?php

// Get the data from the html form and assign them to variables
$name = $_POST["uname"];
$email = $_POST["email"];
$suggestions = $_POST["suggestions"];

// Create table for the data of the form
echo "<table border='border' style='border-collapse : collapse; border: 1px solid black;' cellpadding = '5' cellspacing = '0'>";

// Create row for the name data of the form and display the name
echo "<tr>";
echo "<th> Name </th>";
echo "<td>" . $name . "</td>";
echo "</tr>";

// Create row for the email data of the form and display the email
echo "<tr>";
echo "<th> Email </th>";
echo "<td>" . $email . "</td>";
echo "</tr>";

// Create row for the suggestions data of the form and display the suggestions
echo "<tr>";
echo "<th> Suggestions </th>";
echo "<td>" . $suggestions . "</td>";
echo "</tr>";

?>