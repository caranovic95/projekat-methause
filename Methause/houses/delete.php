<?php
    header("Access-Control-Allow-Origin: *"); 
    header('Access-Control-Allow-Methods: POST');
    include("../config.php");
    $conn;
    $rarray = array();
    $errors = "";


    if(isset($_POST['id'])){
        $stmt = $conn->prepare("DELETE FROM houses WHERE houses.id = ?");
        $stmt->bind_param("i", $_POST['id']);
        $stmt->execute();

    } else {
        $rarray['error'] = "Error";
    }

    echo json_encode($rarray);