const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  image_url: DataTypes.TEXT,
});

module.exports = Product;
