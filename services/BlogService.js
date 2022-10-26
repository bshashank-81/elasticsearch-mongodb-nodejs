const { BlogModel } = require("../models/Blog");

exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};

//get all records from mongodb
exports.getAllBlogs = async () => {
  return await BlogModel.find();
};

//search results from elasticsearch
exports.searchBlogs = async (searchParam) => {
  const results = await BlogModel.search({
    query_string: {
      query: searchParam,
    },
  });
  if (results.body.hits.hits) {
    return results.body.hits.hits;
  }
};
