const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});