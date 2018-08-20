<?php
    header("Access-Control-Allow-Origin: *"); 
    header('Access-Control-Allow-Methods: POST');
    include("../config.php");
    $conn;
    $rarray = array();
    $errors = "";

    $admin_local=null;

    if(isset($_POST['naslov']) && isset($_POST['povrsina']) && isset($_POST['brojSoba']) && isset($_POST['brojTerasa']) && isset($_POST['cena'])
    && isset($_POST['dostupno']) && isset($_POST['slika'])){
        $stmt = $conn->prepare("INSERT INTO houses (naslov, povrsina, brojSoba, brojTerasa, cena, dostupno,slika) VALUES (?,?,?,?,?,?,?)");
        $stmt->bind_param("ssiidis", $_POST['naslov'], $_POST['povrsina'], $_POST['brojSoba'], $_POST['brojTerasa'], $_POST['cena'], $_POST['dostupno'], $_POST['slika']);
        $stmt->execute();
    } else {
        $rarray['error'] = "Error";
    }
   
    echo json_encode($rarray);