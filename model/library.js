const mongoose = require("mongoose");
const librarySchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    ISBN:{
        type:String,
    },
    PostedBy:{
        type:String,
    }
  },
  { timestamps: true }
);
const libraryModel = mongoose.model("Library", librarySchema);
module.exports = libraryModel;
