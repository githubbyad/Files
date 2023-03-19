<?php
include "config.php";

$limit = 10;


$sql = $conn->prepare("SELECT id FROM response");
$sql->execute();

$records = $sql->rowCount();
$total_pages = ceil($records / $limit);

echo json_encode(["pages" => $total_pages]);
?>