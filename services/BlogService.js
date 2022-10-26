const { BlogModel } = require("../models/Blog");

exports.createBlog = async (blog) => {
  // blog.on("es-indexed", function (err, res) {});
  return await BlogModel.create(blog);
};

exports.getAllBlogs = async (res) => {
  // return await BlogModel.find();
  const results = await BlogModel.search({
    query_string: {
      query: "second",
    },
  });
  if (results.body.hits.hits) {
    console.log("results.body", results.body.hits.hits);
    return results.body.hits.hits;
    // res.json(results.body);
  } else {
    // res.status(400).json({ success: false });
  }
};
