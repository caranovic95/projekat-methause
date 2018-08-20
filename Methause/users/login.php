<?php

header("Access-Control-Allow-Origin: *"); 
header('Access-Control-Allow-Methods: POST');
include("../config.php");

if(isset($_POST['email']) && isset($_POST['password'])){
    global $conn;

    $email = $_POST['email'];
    $password = $_POST['password'];


    $rarray = array();

    $encryptedPass = md5($password);

    $sql = "SELECT administrator FROM users WHERE email=? AND password=?";
    $query = $conn->prepare($sql);
    $query->bind_param('ss',$email,$encryptedPass);
    $query->execute();
    $query = $query->get_result();


    if ($query->num_rows > 0) {
        while($row = $query->fetch_assoc()) {
            $admin = $row['administrator'];
        }


        $id = sha1(uniqid());
        $result2 = $conn->prepare("UPDATE users SET token=? WHERE email=?");
        $result2->bind_param("ss",$id,$email);
        $result2->execute();
        $rarray['token'] = $id;

    $rarray['administrator'] = $admin;

    } else{
        header('HTTP/1.1 401 Unauthorized');
        $rarray['error'] = "Invalid email/password";
    }

    $query->close();
    }

    echo json_encode($rarray);