<?php


require_once __DIR__ . '/rest/services/petService.php';

$pet_id = $_REQUEST['id'];

$pet_service = new petService();
$pet = $pet_service->get_pet_by_id($pet_id);

header('Content-Type: application/json');
echo json_encode($pet);