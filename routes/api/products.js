const express = require("express");

const router = express.Router();

const { ctrlWrapper, auth } = require("../../middlewares");
const { getCategory } = require("../../controllers/products");

router.get("/category", auth, ctrlWrapper(getCategory));

module.exports = router;
