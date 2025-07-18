<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"));

$email = $conn->real_escape_string($data->email);
$password = $conn->real_escape_string($data->password);

$result = $conn->query("SELECT * FROM users WHERE email='$email' AND password='$password'");

if ($result->num_rows > 0) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>