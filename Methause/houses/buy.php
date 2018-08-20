<?php
    header("Access-Control-Allow-Origin: *"); 
    header('Access-Control-Allow-Methods: POST');
    include("../config.php");
    $conn;
    $rarray = array();
    $errors = "";


    if(isset($_POST['id']) && isset($_POST['dostupno'])){
        $stmt = $conn->prepare("UPDATE houses SET dostupno = ? WHERE houses.id = ?");
        $stmt->bind_param("ii", $_POST['dostupno'], $_POST['id']);
        $stmt->execute();

    } else {
        $rarray['error'] = "Error";
    }

    echo json_encode($rarray);