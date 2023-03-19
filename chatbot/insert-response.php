<?php

include "config.php";

// get data from JSON
$input = file_get_contents("php://input");
$values = json_decode($input);

// get form values
$subject = trim($values->subject);
$pattern = trim($values->pattern);
$question = trim($values->question);
$body = trim($values->body);
$active = $values->active;

// check if all fields are filled or not
if ($subject != "" && $pattern != "" && $body != "" && $active != "") {
    // insert data
    $sql = $conn->prepare("INSERT INTO response(subject,question,pattern,body,active) VALUES('{$subject}','{$question}','{$pattern}','{$body}','{$active}')");
    if ($sql->execute()) {
        echo json_encode(["insert" => "success", "message" => "Data inserted"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["insert" => "error", "message" => "Data not inserted"], JSON_PRETTY_PRINT);
    }
} else {
    echo json_encode(["insert" => "error", "message" => "All fields are required."], JSON_PRETTY_PRINT);
}
