<?php

use rest\services\UserService;

require_once __DIR__ . '/rest/services/UserService.php';

/*$payload = $_POST;

if(empty($payload['name'])) {
    header('HTTP/1.1 400 Bad Request');
    die(json_encode(['error' => "First name field is missing"]));
}

if (empty($payload['email'])) {
    header('HTTP/1.1 400 Bad Request');
    die(json_encode(['error' => "Email field is missing"]));
}

if (empty($payload['password'])) {
    header('HTTP/1.1 400 Bad Request');
    die(json_encode(['error' => "Password field is missing"]));
}

if (empty($payload['number'])) {
    header('HTTP/1.1 400 Bad Request');
    die(json_encode(['error' => "Number field is missing"]));
}*/

// Assuming UserService handles database operations
$payload = $_REQUEST;


$userService = new UserService();
$user = $userService->add_user($payload);

//echo json_encode(['message' => "You have successfully added the user", 'data' => $user]);
//echo json_encode(['message' => "You have successfully added the user", 'data' => $user]);
