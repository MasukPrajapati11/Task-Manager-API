const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

require("dotenv").config();
require("./db"); // Ensure this imports the database connection
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Task Manager API working" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
