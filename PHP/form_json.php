<?php
header("Content-Type: application/json");

// Get raw POST JSON
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No JSON received"]);
    exit;
}

// ✅ validate token here if needed
$validToken = ["expected_token_value"]; // Example token validation
if (!isset($data['token']) || !in_array($data['token'], $validToken)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid token"
    ]);
    exit;
}

// 🗑️ remove fields that are not needed, set them in array
$fieldsToRemove = [
    'token'
];
foreach ($fieldsToRemove as $field) {
    unset($data[$field]);
}

// Save into file
$file = "submitted_forms.json";
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

// Load existing
$existing = json_decode(file_get_contents($file), true);

// Append new
$existing[] = $data;

// Save back
file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT));

// Response
echo json_encode([
    "status" => "success",
    "message" => "Data saved successfully"
]);
