<!DOCTYPE html>
<html lang="en">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="indexStayle.css">

    <style>
        body{background-color: rgb(117, 114, 114); }
        div.forms {
            border: 2px solid white;
            text-align: center;
            margin: auto; /* Center the form horizontally */
            width: 50%; /* Set the width of the form */
            padding: 20px;
            margin-top: 50px; /* Add top margin for better spacing */
        }

        table {
            border: 1px solid black;
            padding-right: 300px;
            margin: auto; /* Center the table horizontally */
            width: 80%; /* Set the width of the table */
            margin-top: 20px; /* Add top margin for better spacing */
        }

        tr, td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
<div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
           <img src="logo2.png" alt="Logo" style="width: 20%;">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="index.html">Home Page</a></li>
                <li class="nav-item"><a class="nav-link" href="request.html">Add your request</a></li>
                <li class="nav-item"><a class="nav-link" href="questionaire.html">Send your feedback</a></li>
                <li class="nav-item"><a class="nav-link" href="funPage.html">FunPage</a></li>
                <li class="nav-item"><a class="nav-link" href="About us.html">About us</a></li>
                <li class="nav-item"><a class="nav-link" href="contact us.html">Contact us</a></li>
                <li class="nav-item"><a class="nav-link" href="sign up.html">Log in</a></li>
                <li class="nav-item"><a class="nav-link" href="dev.html">Dynamic Table</a></li>
                <li class="nav-item"><a class="nav-link" href="search1.php">Customers service</a></li>
            </ul>
        </nav>
    </div>
    <!-- Header: Handling with your data service from here!!! -->
<h1 style="font-weight: bold; text-align: center; text-decoration: underline;"> Handling with your data service from here !!! </h1>

<!-- Form for displaying information about the business -->
<div class="forms">
    <h3>Information about your business</h3>
    <form method="post">
        <label>Business name:<input type="text" name="bus"></label><br/><br/>
        <input type="submit" name="submit1" value="search" class="btn btn-info"><br/>
    </form>

    <!-- PHP code for display information section -->
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "squmarketdatabase";

    // Establish a connection to the database
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    
    // Check if the connection is successful
    if (!$conn) {
        die("Connection failed:" . mysqli_connect_error());
    }

    // Check if the Search button was clicked
    if (isset($_POST['submit1'])) {
        // Get the name of the business from the form
        $bus = $_POST["bus"];
        
        // SQL query to retrieve information about the business
        $sql = "SELECT * FROM categories WHERE businessName = '$bus'";
        $result = mysqli_query($conn, $sql);

        // Check the result of the query
        if ($result) {
            // If there are matching businesses, display the information in a table
            if (mysqli_num_rows($result) > 0) {
                echo "<table class='table table-bordered table-striped'>" .
                    "<tr><td>Category</td><td>Business Name</td>" .
                    "<td>Description</td></tr>";

                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>" .
                        "<td>" . $row["category"] . "</td>" .
                        "<td>" . $row["businessName"] . "</td>" .
                        "<td>" . $row["businessDescription"] . "</td>" .
                        "</tr>";
                }
                echo "</table><br/>";
            } else {
                // If no matching businesses found, display a message
                echo "No matching business found.";
            }
        } else {
            // If there is an error executing the query, display an error message
            echo "Error executing query: " . mysqli_error($conn);
        }
    }

    ?> 
</div>
    <div class="forms">
    <h3>Update description of your business</h3>
    <form method="post">
        <label>Category:<input type="text" name="category"></label><br/>
        <label>Business name:<input type="text" name="bus"></label><br/>
        <label>New Description:<input type="text" name="newDescription"></label><br/><br/>
        <input type="submit" name="update" value="Update" class="btn btn-success"><br/>
    </form>

    <!-- PHP code for update section -->
    <?php
    // Check if the Update button was clicked
    if (isset($_POST['update'])) {
        // Get values from the form
        $category = $_POST["category"];
        $bus = $_POST["bus"];
        $newDescription = $_POST["newDescription"];

        // Update query
        $sql = "UPDATE categories SET businessDescription = '$newDescription' WHERE category = '$category' AND businessName = '$bus'";
        $result = mysqli_query($conn, $sql);

        // Check the result of the query
        if ($result) {
            // Check if any rows were affected by the update
            if (mysqli_affected_rows($conn) > 0) {
                echo "Description updated successfully!<br><br>";

                // Display the updated data in a table
                $updatedData = mysqli_query($conn, "SELECT * FROM categories WHERE category = '$category' AND businessName = '$bus'");
                if (mysqli_num_rows($updatedData) > 0) {
                    echo "<table border='1'>".
                        "<tr><td>Category</td><td>Business Name</td>".
                        "<td>Description</td></tr>";

                    while ($row = mysqli_fetch_assoc($updatedData)) {
                        echo "<tr>".
                             "<td>".$row["category"]."</td>".
                             "<td>".$row["businessName"]."</td>".
                             "<td>".$row["businessDescription"]."</td>".
                             "</tr>";
                    }
                    echo "</table><br/>";
                } else {
                    echo "No data found after the update.";
                }
            } else {
                echo "No matching business found for update.";
            }
        } else {
            echo "Error updating description: " . mysqli_error($conn);
        }
    }
    ?>
</div>
<div class="forms">
    <h3>Delete your business</h3>
    <form method="post">
        <label>Category:<input type="text" name="category"></label><br/>
        <label>Business name:<input type="text" name="business"></label><br/><br/>
        <input type="submit" name="delete" value="Delete" class="btn btn-danger"><br/>
    </form>

    <!-- PHP code for delete section -->
    <?php
    // Check if the Delete button was clicked
    if (isset($_POST['delete'])){
        // Get values from the form
        $category = $_POST['category'];
        $busi = $_POST['business'];

        // Delete query
        $sql = "DELETE FROM categories WHERE category = '$category' AND businessName = '$busi'";
        $result = mysqli_query($conn, $sql);

        // Check the result of the query
        if ($result) {
            // Check if any rows were affected by the deletion
            if (mysqli_affected_rows($conn) > 0) {
                echo "Business deleted successfully!<br><br>";
            } else {
                echo "No matching business found for deletion.";
            }
        } else {
            echo "Error deleting business: " . mysqli_error($conn);
        }
    }

    // Close the database connection
    mysqli_close($conn);
    ?>
</div>
<br/>

</body>
<footer>
<div class="footer">
    <h3>Find us here !</h3>
        <div style="margin-top:20px"><img src="location-icon.png" height="20px" width="15px"/><br/>
            <a href="https://goo.gl/maps/FLWbJeC6pcHjJaXG6">SQU - COLLEGE OF SCIENCE</a></div><br/>
        <div><p><img src="phone-icon.png" height="20px" width="15px"/><br/>+968 91111111</p></div>
        <div style="margin-bottom:20px"><p><img src="email-icon.png" height="15px" width="20px"/><br/><a 
            href="mailto: squmarket5@gmail.com" >squmarket5@gmail.com</a></p></div>
</div>
</footer>
</html>