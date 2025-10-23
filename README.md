![Node.js](https://img.shields.io/badge/Node.js-v18.0-green)

# My API Project

This is a basic Express.js API with CRUD operations for users.

## Endpoints

- **GET** `/api/users` – List all users  
- **GET** `/api/users/:id` – Get a single user by ID  
- **POST** `/api/users` – Add a new user (JSON body: `{ "name": "..." }`)  
- **PUT** `/api/users/:id` – Update a user (JSON body: `{ "name": "..." }`)  
- **DELETE** `/api/users/:id` – Delete a user

## Installation

```bash
npm install
node index.js
