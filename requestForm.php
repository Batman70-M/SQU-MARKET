<?php

// Get the data from the html form and assign them to variables
$name = $_POST["uname"];
$email = $_POST["email"];
$business = $_POST["business"];
$category = $_POST["category"];
$business_desc = $_POST["details"];
$account = $_POST["account"];

// Create table for the data of the form
echo "<table border='border' style='border-collapse : collapse; border: 1px solid black;' cellpadding = '5' cellspacing = '0'>";

// Create row for the name data of the form and display the name
echo "<tr>";
echo "<th> Name </th>";
echo "<td>" . $uname . "</td>";
echo "</tr>";

// Create row for the email data of the form and display the email
echo "<tr>";
echo "<th> Email </th>";
echo "<td>" . $email . "</td>";
echo "</tr>";

// Create row for the business name data of the form and display the business name
echo "<tr>";
echo "<th> Business Name </th>";
echo "<td>" . $business . "</td>";
echo "</tr>";

// Create row for the business category data of the form and display the business category
echo "<tr>";
echo "<th> Business Category </th>";
echo "<td>" . $category . "</td>";
echo "</tr>";

// Create row for the business description data of the form and display the business description
echo "<tr>";
echo "<th> Business Description </th>";
echo "<td>" . $business . "</td>";
echo "</tr>";

// Create row for the business contact account data of the form and display the nusiness contact account
echo "<tr>";
echo "<th> Business contact Account </th>";
echo "<td>" . $business . "</td>";
echo "</tr>";

?>