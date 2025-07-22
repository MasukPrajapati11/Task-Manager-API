# Task Manager API

A simple RESTful API for managing tasks and users, built with Node.js and Express.

## Features

- User registration and authentication (JWT)
- CRUD operations for tasks
- Middleware for authentication
- MongoDB integration with Mongoose

## Project Structure

```
db.js
index.js
package.json
middlewares/
  auth.js
models/
  Task.js
  User.js
routes/
  taskRoutes.js
  userRoutes.js
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MasukPrajapati11/Task-Manager-API.git
   cd Task-Manager-API
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables (e.g., MongoDB URI, JWT secret).

### Running the Server

```bash
node index.js
```

## API Endpoints

- `POST /users/register` – Register a new user
- `POST /users/login` – Login and receive a JWT
- `GET /tasks` – Get all tasks (auth required)
- `POST /tasks` – Create a new task (auth required)
- `PUT /tasks/:id` – Update a task (auth required)
- `DELETE /tasks/:id` – Delete a task (auth required)
