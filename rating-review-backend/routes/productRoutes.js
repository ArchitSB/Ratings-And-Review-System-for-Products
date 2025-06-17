const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getProductById);
router.get("/:id/summary", controller.getReviewSummary);
router.get("/:id/reviews", controller.getProductReviews);
router.get("/:id/tags", controller.getProductTags);

module.exports = router;
