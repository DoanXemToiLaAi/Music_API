const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./src/db/database");
const userRoutes = require("./src/routes/user");
const songRoutes = require("./src/routes/song");
const artistRoutes = require("./src/routes/artists");
const albumRoutes = require("./src/routes/album");
const orderRoutes = require("./src/routes/order");
const swaggerRoutes = require("./src/swagger");

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/artists", artistRoutes);
app.use("/api/albums", albumRoutes);
app.use("/api/order", orderRoutes);
app.use("/", swaggerRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(
    `Swagger documentation available at http://localhost:${PORT}/api-docs`
  );
});
