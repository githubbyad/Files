<?php

include "config.php";

// get data from JSON
$input = file_get_contents("php://input");
$values = json_decode($input);

// get form values
$id = $values->id;
$subject = trim($values->subject);
$question = trim($values->question);
$pattern = trim($values->pattern);
$body = trim($values->body);
$active = $values->active;

// check if all fields are filled or not
if ($subject != "" && $question != "" && $pattern != "" && $body != "" && $active != "") {
    // run query
    $sql = $conn->prepare("UPDATE response 
                            SET subject = '{$subject}', 
                                question = '{$question}', 
                                pattern = '{$pattern}', 
                                body = '{$body}', 
                                active = '{$active}' 
                            WHERE id = {$id}");
    if ($sql->execute()) {
        echo json_encode(["update" => "success", "message" => "Data updated"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["update" => "error", "message" => "Data not updated"], JSON_PRETTY_PRINT);
    }
} else {
    echo json_encode(["update" => "error", "message" => "All fields are required."], JSON_PRETTY_PRINT);
}
