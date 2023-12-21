<?php

//Create Owner class that have name, id and college
class Owner{
    private $name;
    private $id;
    private $college;

    // The constructer of the Owner class
    function __construct($name, $id, $college){
        $this -> name = $name;
        $this -> id = $id;
        $this -> college = $college;
    }

    // Methods of the Owner class, specifically, get and set methods
    function get_name(){
        return $this -> name;
    }

    function set_name($name){
        $this -> name = $name;
    }

    function get_id(){
        return $this -> id;
    }

    function set_id($id){
        return $this -> id = $id;
    }

    function get_college(){
        return $this -> college;
    }

    function set_college($college){
        return $this -> college = $college;
    }
}

// Create displayOwners function to display the array of objects
function displayOwners(array $ar){
    echo "<table border='border' style='border-collapse : collapse; border: 1px solid black; margin-left: auto; margin-right: auto; margin-top: 2cm;' cellpadding = '5' cellspacing = '0'>";
    echo "<tr>";
    echo "<th> Name </th>";
    echo "<th> ID </th>";
    echo "<th> College </th>";
    echo "</tr>";

    echo "<tr>";
    for($x=0;$x<count($ar);$x++){
        echo "<td>" . $ar[$x]->get_name() . "</td>";
        echo "<td>" . $ar[$x]->get_id() . "</td>";
        echo "<td>" . $ar[$x]->get_college() . "</td>";
    }
    echo "</tr>";
}

// Get the data from the html form and assign them to variables
$ownerName = $_POST["ownerNamePHP"];
$ownerID = $_POST["ownerIDPHP"];
$ownerCollege = $_POST["ownerCollegePHP"];

// Create an Owner object and pass the parameters the form data 
$owner = new Owner($ownerName, $ownerID, $ownerCollege);

// Create an array and give it the created object
$owners = array($owner);

// Call displayOwners function to display the array of objects
displayOwners($owners);

?>