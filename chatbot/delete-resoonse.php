<?php
include "config.php";

// get data id
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    // run query to check data available or not
    $sql1 = $conn->prepare("SELECT * FROM response WHERE id = {$id}");
    $sql1->execute();
    $result1 = $sql1->fetch();
    // if data available
    if ($sql1->rowCount() == 1) {
        // delete data
        $sql = $conn->prepare("DELETE FROM response WHERE id = {$id}");
        if ($sql->execute()) {
            echo json_encode(["delete" => "success", "message" => "Data deleted successfully"], JSON_PRETTY_PRINT);
        }
    } else {
        echo json_encode(["delete" => "error", "message" => "Data not found"], JSON_PRETTY_PRINT);
    }
} else {
    echo json_encode(["delete" => "error", "message" => "Id not found in URL"], JSON_PRETTY_PRINT);
}
