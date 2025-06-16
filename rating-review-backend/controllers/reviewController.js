const { Review } = require("../models");

exports.createReview = async (req, res) => {
  const { userId, productId, rating, reviewText } = req.body;
  if (!rating && !reviewText) {
    return res.status(400).json({ message: "Rating or Review required." });
  }

  try {
    const review = await Review.create({
      rating,
      review_text: reviewText,
      UserId: userId,
      ProductId: productId,
    });
    res.json(review);
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(400).json({ message: "You already reviewed this product." });
    } else {
      res.status(500).json({ message: "Server error." });
    }
  }
};
