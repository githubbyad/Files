<?php

$host = "localhost";
$user = "id20183698_root";
$pwd = "VCc{MW#d%+X)%Ml6";
$db = "id20183698_response";

// set DSN
$dsn = "mysql:host=$host;dbname=$db";

// set attributes
$options = [
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
    PDO::ATTR_EMULATE_PREPARES => false
];
try {
    // create PDO instance
    $conn = new PDO($dsn, $user, $pwd, $options);
} catch (PDOException $e) {
    die($e->getMessage());
}
