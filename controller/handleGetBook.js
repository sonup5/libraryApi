const libraryModel = require("../model/library");

async function handleGetBook(req, res) {
  try {

    const searchedBook = req.params.bookName;
    console.log(searchedBook);
    const entry = await libraryModel.find({ bookName: searchedBook });
    if (entry) {
      return res.json({ entry });
    } else {
      return res.json({ msg: "Book not found", searchedBook });
    }
  } catch (err) {
    return res.json({ msg: "server error" });
  }
}

module.exports = handleGetBook;
