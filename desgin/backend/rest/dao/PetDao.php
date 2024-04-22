<?php

namespace rest\dao;

require_once __DIR__ . '/BaseDao.php';

class petDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct('pets');
    }

    public function add_pet($pet)
    {
        return $this->insert($pet);
    }

    public function count_pets_paginated($search)
    {
        $query = "SELECT COUNT(*) AS count
                  FROM pets
                  WHERE LOWER(name) LIKE CONCAT('%', :search, '%') OR 
                        LOWER(email) LIKE CONCAT('%', :search, '%')";
        return $this->query_unique($query, [
            'search' => $search
        ]);
    }

    public function get_pets_paginated($offset, $limit, $search, $order_column, $order_direction)
    {
        $query = "SELECT *
                  FROM pets
                  WHERE LOWER(name) LIKE CONCAT('%', :search, '%')
                  ORDER BY {$order_column} {$order_direction}
                  LIMIT {$offset}, {$limit}";
        return $this->query($query, [
            'search' => $search
        ]);
    }

    public function delete_pet_by_pet_id($pet_id)
    {
        $query = "DELETE FROM pets WHERE pet_id = :pet_id";
        $this->execute($query, [
            'pet_id' => $pet_id
        ]);
    }

    public function get_pet_by_pet_id($pet_pet_id)
    {
        return $this->query_unique(
            "SELECT * FROM pets WHERE pet_id = :pet_id",
            [
                'pet_id' => $pet_pet_id
            ]
        );
    }

    public function edit_pet($pet_id, $pet)
    {
        $query = "UPDATE pets 
          SET name = :name, 
              breed_id = :breed_id, 
              age = :age, 
              price = :price, 
              canton_id = :canton_id, 
              owner_id = :owner_id, 
              vaccination_id = :vaccination_id, 
              personality = :personality, 
              description = :description 
          WHERE pet_id = :pet_id";

        $this->execute($query, [
            'name' => $pet['name'],
            'breed_id' => $pet['breed_id'],
            'age' => $pet['age'],
            'price' => $pet['price'],
            'canton_id' => $pet['canton_id'],
            'owner_id' => $pet['owner_id'],
            'vaccination_id' => $pet['vaccination_id'],
            'personality' => $pet['personality'],
            'description' => $pet['description'],
            'pet_id' => $pet_id
        ]);
    }
}
