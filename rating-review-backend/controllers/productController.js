const { Product, Review } = require("../models");
const { Sequelize } = require("sequelize");

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.json(product);
};

exports.getReviewSummary = async (req, res) => {
  const result = await Review.findAll({
    where: { ProductId: req.params.id },
    attributes: [[Sequelize.fn("AVG", Sequelize.col("rating")), "avgRating"]],
  });
  res.json(result[0]);
};

exports.getProductReviews = async (req, res) => {
  const reviews = await Review.findAll({
    where: { ProductId: req.params.id },
    include: ["User"],
  });
  res.json(reviews);
};
