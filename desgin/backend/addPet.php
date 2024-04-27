<?php

require_once __DIR__ . '/rest/services/petService.php';

$payload = $_REQUEST;

function check_missing_field($field_name, $field_value) {
    if ($field_value == NULL || $field_value == '') {
        header('HTTP/1.1 500 Bad Request');
        die(json_encode(['error' => ucfirst($field_name) . " field is missing"]));
    }
}



// Additional attributes
check_missing_field('name', $payload['name']);
check_missing_field('breed_id', $payload['breed_id']);
check_missing_field('age', $payload['age']);
check_missing_field('price', $payload['price']);
check_missing_field('canton_id', $payload['canton_id']);
check_missing_field('owner_id', $payload['owner_id']);
check_missing_field('vaccination_id', $payload['vaccination_id']);
check_missing_field('personality', $payload['personality']);
check_missing_field('description', $payload['description']);

$pet_service = new petService();

if($payload['id'] != NULL && $payload['id'] != ''){
    $pet_service -> edit_pet($payload);
} else {
    unset($payload['id']);
    $pet = $pet_service->add_pet($payload);
}

echo json_encode(['message' => "You have successfully added the pet", 'data' => $pet]);
