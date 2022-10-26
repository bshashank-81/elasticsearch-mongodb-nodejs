const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");

//create model
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true, max: 100 },
  body: String,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

blogSchema.plugin(mongoosastic);

const BlogModel = mongoose.model("Blog", blogSchema);

BlogModel.createMapping(function (err, mapping) {
  if (err) {
    console.log("error creating mapping (you can safely ignore this)");
    console.log(err);
  } else {
    console.log("mapping created!");
    console.log(mapping);
  }
});

module.exports = { BlogModel, blogSchema };
