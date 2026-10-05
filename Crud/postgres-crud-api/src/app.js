const express = require("express");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "PostgreSQL CRUD API is running"
    });
});

app.use("/api/users",userRoutes);

module.exports = app;