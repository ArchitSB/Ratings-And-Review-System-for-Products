const express = require("express");
const router = express.Router();
const controller = require("../controllers/reviewController");
const multer = require("multer");
const path = require("path");
const auth = require("../middlewares/jwt");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

router.post("/", auth, upload.single("photo"), controller.createReview);

module.exports = router;