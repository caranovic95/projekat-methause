<?php 
    header("Access-Control-Allow-Origin: *"); 
    include("../config.php");
    $conn;
    $result = $conn->prepare("SELECT * FROM houses where id=?");
    $result->bind_param("i", $_GET["id"]);
    $result->execute();
    $result = $result->get_result();
    $num_rows = $result->num_rows;
    $houses=null;
    if($num_rows > 0)
    {
        while($row = $result->fetch_assoc()) {
            $houses['id'] = $row['id'];
            $houses['naslov'] = $row['naslov'];
            $houses['povrsina'] = $row['povrsina'];
            $houses['brojSoba'] = $row['brojSoba'];
            $houses['brojTerasa'] = $row['brojTerasa'];
            $houses['cena'] = $row['cena'];
			$houses['dostupno'] = $row['dostupno'];
            $houses['slika'] = $row['slika'];
        }
    }
    $rarray = array();
    $rarray['houses'] = $houses;
    echo json_encode($rarray);