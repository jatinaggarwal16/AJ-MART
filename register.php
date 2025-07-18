<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$email = $conn->real_escape_string($data->email);
$password = $conn->real_escape_string($data->password);

$conn->query("INSERT INTO users (email, password) VALUES ('$email', '$password')");
echo json_encode(["success" => true]);
?>