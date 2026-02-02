const express = require("express");
const userRoutes = require("./routes/users");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
