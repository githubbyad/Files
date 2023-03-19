<?php
include "config.php";

$limit = 10;
$page = (isset($_GET['page'])) ? $_GET['page'] : 1;
$offset = ($page - 1) * $limit;

$sql = $conn->prepare("SELECT * FROM response ORDER BY id DESC LIMIT ${offset},{$limit}");
$sql->execute();
$result = $sql->fetchAll();

echo json_encode($result);
?>