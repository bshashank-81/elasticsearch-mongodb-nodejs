const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoute");

const app = express();

//middleware
app.use(express.json());

module.exports = app;

//configure mongoose , creating mongodb connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use("/api/blogs", blogRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
