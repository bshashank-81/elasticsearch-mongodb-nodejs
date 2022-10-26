const express = require("express");
const {
  getAllBlogs,
  createBlog,
  searchBlogs,
} = require("../controllers/BlogController");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/search").get(searchBlogs);

module.exports = router;
