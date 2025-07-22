
# 📝 Task Manager API

A simple RESTful API built using **Node.js**, **Express**, and **MongoDB** for managing tasks. Users can perform CRUD operations on tasks including creating, updating, deleting, and viewing tasks.

---

## 🚀 Features

- Create new tasks
- Read all tasks or a single task by ID
- Update task details
- Delete tasks
- MongoDB integration using Mongoose
- Modular folder structure for scalability

---

## 📁 Project Structure

```
TaskManagerProject/
│
├── config/              # Database connection config
├── controllers/         # Request handling logic
├── models/              # Mongoose schema
├── routes/              # API route definitions
├── .env                 # Environment variables
├── app.js               # Main server file
└── package.json         # Project metadata and dependencies
```

---

## 🛠️ Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Git

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/MasukPrajapati11/Task-Manager-API.git
cd Task-Manager-API
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. **Run the server**

```bash
# For development
npm run dev

# For production
npm start
```

---

## 🧪 API Endpoints

### Base URL: `http://localhost:5000/api/tasks`

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | `/`               | Get all tasks        |
| GET    | `/:id`            | Get task by ID       |
| POST   | `/`               | Create a new task    |
| PUT    | `/:id`            | Update a task        |
| DELETE | `/:id`            | Delete a task        |

> All responses are in JSON format.

---

## 📦 Scripts

```bash
npm run dev     # Runs the server with nodemon
npm start       # Runs the server normally
```

---

## 🔐 Environment Variables

| Variable     | Description                |
|--------------|----------------------------|
| `PORT`       | Port number to run server  |
| `MONGO_URI`  | MongoDB connection string  |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Masuk Prajapati**  
[GitHub](https://github.com/MasukPrajapati11)
