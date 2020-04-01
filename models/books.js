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
    this.id = (newBook.Id !== "0")? +newBook.Id : getId() ;
  }

  save() {
    booksData.push(this);
    console.log(this);
    storeData(booksData, "books.json");
  }
  
   update(id) {
    let index = booksData.findIndex((elem) => id==elem.id);
    booksData[index] = this;
    storeData(booksData, "books.json");
  }

  static delBook (id, cb) {
    console.log(id)
    let index = booksData.findIndex((elem) => id == elem.id);
    let UpdateBooks = booksData.filter((elem)=> id != elem.id); //works sync, well
    storeData(UpdateBooks, "books.json");
    return cb(UpdateBooks); //passed updateBooks because the main array booksData is not initializing again
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

function getId () {
  if (booksData!=[]) {
    let lastId = booksData[booksData.length-1].id;
    return lastId + 1;
  }
  return 1;
}

function findById (id) {
  let product = booksData.find((elem)=>elem.id==id);
  return product;
}
