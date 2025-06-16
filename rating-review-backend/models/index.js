const sequelize = require("../config/db");
const Product = require("./product");
const User = require("./user");
const Review = require("./review");

User.hasMany(Review);
Product.hasMany(Review);

Review.belongsTo(User);
Review.belongsTo(Product);

module.exports = { sequelize, Product, User, Review };
