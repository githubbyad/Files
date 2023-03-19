<?php
include "config.php";

// get data id
$id = $_GET['id'];
// run query
$sql = $conn->prepare("SELECT * FROM response WHERE id = {$id}");
$sql->execute();
$result = $sql->fetch();
echo json_encode($result,JSON_PRETTY_PRINT);
