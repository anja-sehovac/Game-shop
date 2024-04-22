<?php


use rest\services\UserService;

require_once __DIR__ . '/rest/services/UserService.php';

$user_id = $_REQUEST['id'];

$user_service = new UserService();
$user = $user_service->get_user_by_id($user_id);

header('Content-Type: application/json');
echo json_encode($user);