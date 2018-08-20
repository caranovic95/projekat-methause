<?php
    header("Access-Control-Allow-Origin: *"); 
    header('Access-Control-Allow-Methods: POST');
    include("../config.php");
    $conn;
    $rarray = array();
    $errors = "";


     if(isset($_POST['naslov']) && isset($_POST['povrsina']) && isset($_POST['brojSoba']) && isset($_POST['brojTerasa']) && isset($_POST['cena'])
     && isset($_POST['dostupno']) && isset($_POST['slika'])){
    

    $stmt = $conn->prepare("UPDATE houses SET naslov=?, povrsina=?, brojSoba=?, brojTerasa=?, cena=?, dostupno=?,slika=? WHERE id=?");
    $stmt->bind_param("ssiidisi", $_POST['naslov'], $_POST['povrsina'], $_POST['brojSoba'], $_POST['brojTerasa'], $_POST['cena'], $_POST['dostupno'], $_POST['slika'], $_POST['id']);
    $stmt->execute();
    } else {
        $rarray['error'] = "Error";
    }

    echo json_encode($rarray);