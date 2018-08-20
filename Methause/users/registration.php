<?php
    header("Access-Control-Allow-Origin: *"); 
    header('Access-Control-Allow-Methods: POST');
    include("../config.php");
    
    $rarray = array();
    
    if(isset($_POST['email']) && isset($_POST['firstName']) && isset($_POST['lastName']) && isset($_POST['password'])){
    $email = $_POST['email'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $password = $_POST['password'];
    $password = md5($password);
    $administrator = 0;
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $insert = "INSERT INTO users (email,password,name,lastName,administrator) VALUES (?,?,?,?,?)";
    $query = $conn->prepare($insert);
    $query->bind_param('ssssi',$email,$password,$firstName,$lastName,$administrator);
    $query->execute(); 
    $query->close();
    } else {
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Email invalid";
    }
}

echo json_encode($rarray);