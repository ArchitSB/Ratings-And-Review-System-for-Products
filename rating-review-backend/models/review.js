const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Review = sequelize.define("Review", {
  rating: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 },
  },
  review_text: DataTypes.TEXT,
}, {
  indexes: [{ unique: true, fields: ["UserId", "ProductId"] }]
});

module.exports = Review;
