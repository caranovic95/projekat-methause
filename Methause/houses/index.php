<?php 
 header("Access-Control-Allow-Origin: *"); 
include("../config.php");
    global $conn;
    $rarray = array();
    $result = $conn->query("SELECT * FROM houses");
    $num_rows = $result->num_rows;
    $houses = array();
    if($num_rows > 0)
    {
        while($row = $result->fetch_assoc()) {
            $house = array();
            foreach($row as $key=>$value) {
                $house[$key] = $value;
            }
            array_push($houses,$house);
        }
    }
    $rarray['houses'] = $houses;
    echo json_encode($rarray);