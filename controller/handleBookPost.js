const libraryModel = require("../model/library");
const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

// book should be posted by only authourized users i.e Only logged in admins
async function handlePostBook(req, res, next) {
  try {
    //receiveing token in book as of now we can get it from header as well
    const { bookName, author, genre, ISBN, token } = req.body;

//check if the user is authenticated or login already
    const isValidToken = jwt.verify(token, "sonu1234");
    const PostedByEmail = isValidToken.email;
    console.log(ISBN);
 /// if token verification fails
    if (!isValidToken) {
      return res.status(401).json({ msg: "Invalid token" });
    }
    //if token verified successfully

    if (isValidToken) {
      const bookAlreadyExists = await libraryModel.findOne({ ISBN: ISBN });
      console.log(bookAlreadyExists);
      if (bookAlreadyExists) {
        return res.json({ msg: "book already exists", bookAlreadyExists });
      }

      const entry = await libraryModel.create({
        bookName,
        author,
        genre,
        ISBN,
        PostedByEmail,
      });
      return res.json({ msg: "book Posted successfully", entry });
    }
  } catch (e) {
    return res.json({ msg: "server error",  });
  }
}
module.exports = handlePostBook;
