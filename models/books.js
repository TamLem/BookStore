const fs = require("fs");

const booksData = [];
initialize(booksData);

function initialize (booksData) {
  let existingData = readFile("books.json", "utf8", (data) => {
      if (data != null)
          data.forEach(element => {
              booksData.push(element);
          });
    });
}; 
      

module.exports = class Book {
    constructor(newBook) {
    this.title = newBook.BookTitle;
    this.author = newBook.Author;
    this.year = newBook.Year;
    this.caption = newBook.Caption;
    this.img = newBook.Cover;
    this.price = newBook.Price;
  }

  save() {
    booksData.push(this);
    console.log(this);
    storeData(booksData, "books.json");
  }

  static getAllBooks() {
    return booksData;
  }
};

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

function readFile(path, encoding, cb) {
    try {
        const data = fs.readFileSync(path, encoding);
        if (data != undefined) {
            cb(JSON.parse(data));
            //console.log(JSON.parse(data))
        }
    } catch (err) {
        cb(null);
    }
}

