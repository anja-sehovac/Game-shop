<?php
require_once __DIR__ . '/rest/services/petService.class.php';

$payload = $_REQUEST;

$params = [
    'start' => (int)$payload['start'],
    'search' => $payload['search']['value'],
    'draw' => $payload['draw'],
    'limit' => (int)$payload['length'],
    'order_column' => $payload['order'][0]['name'],
    'order_direction' => $payload['order'][0]['dir'],
];

$pet_service = new petService();

$data = $pet_service->get_pets_paginated($params['start'], $params['limit'], $params['search'], $params['order_column'], $params['order_direction']);

foreach($data['data'] as $id => $pet) {
    $data['data'][$id]['action'] = '<div class="btn-group" role="group" aria-label="Actions">' .
        '<button type="button" class="btn btn-warning" onclick="petService.open_edit_pet_modal('. $pet['id'] .')">Edit</button>' .
        '<button type="button" class="btn btn-danger" onclick="petService.delete_pet('. $pet['id'] .')">Delete</button>' .
        '</div>';
}

// Response
echo json_encode([
    'draw' => $params['draw'],
    'data' => $data['data'],
    'recordsFiltered' => $data['count'],
    'recordsTotal' => $data['count'],
    'end' => $data['count']
]);