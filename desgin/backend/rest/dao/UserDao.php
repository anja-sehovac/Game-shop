<?php

namespace rest\dao;

use BaseDao;

require_once __DIR__ . '/BaseDao.php';

class UserDao extends BaseDao
{
    public function __construct()
    {
        parent::__construct('users');
    }

    public function add_user($user)
    {
        $query = "INSERT INTO users (name, email, password, number) VALUES (:name, :email, :password, :number)";
        $statement = $this->connection->prepare($query);
        $statement->execute($user);
        $user['id'] = $this->connection->lastInsertId();
        return $user;
    }
}
