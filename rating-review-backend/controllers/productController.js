const { Product, Review } = require("../models");
const { Sequelize } = require("sequelize");
const stopwords = require('stopwords').english; 

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

exports.getProductTags = async (req, res) => {
  const { Review } = require("../models");
  const reviews = await Review.findAll({
    where: { ProductId: req.params.id },
    attributes: ['review_text'],
  });

  const text = reviews.map(r => r.review_text || '').join(' ').toLowerCase();
  const words = text.match(/\b\w+\b/g) || [];
  const filtered = words.filter(w => !stopwords.includes(w) && w.length > 2);
  const freq = {};
  filtered.forEach(w => freq[w] = (freq[w] || 0) + 1);

  const tags = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([word]) => word);

  res.json({ tags });
};
