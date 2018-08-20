<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
header("Content-type: application/json");
$houses = array(
    array('id' => 1, 'povrsina' => 200, 'cena' => 200000),
    array('id' => 2, 'povrsina' => 100, 'cena' => 100000),
    array('id' => 3, 'povrsina' => 400, 'cena' => 400000),
    array('id' => 4, 'povrsina' => 530, 'cena' => 530000),
    array('id' => 5, 'povrsina' => 89, 'cena' =>  89000),
    array('id' => 6, 'povrsina' => 170, 'cena' => 170000),
    array('id' => 7, 'povrsina' => 259, 'cena' => 259000),
    array('id' => 8, 'povrsina' => 167, 'cena' => 167000),
    array('id' => 9, 'povrsina' => 302, 'cena' => 302000),
    array('id' => 10, 'povrsina' => 96, 'cena' => 96000),
);
echo json_encode($houses);