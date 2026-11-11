const mongoose = require("mongoose");

//Define Post schema 
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 120,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },

    authorName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

//Create Post model 
const Post = mongoose.model("Post", postSchema);

module.exports = Post;