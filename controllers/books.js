const fs = require('fs')

const booksData = [];
initalize(booksData);

function initalize (booksData) {
    let existingData = readFile('books.txt', 'utf8');
    if (existingData != null) existingData.forEach(element => { 
        booksData.push(element);
    });
    return booksData;
}

exports.addBook = (req, res, next) => {
    booksData.push(req.body);
    console.log(booksData);
    storeData(booksData, "books.txt"); 
    res.render("admin");
}

exports.getAddBook = (req, res, next) => {
    res.render('admin')
  }

exports.getBooks = (req, res, next) => {
  res.render('index', {booksData: booksData})
}

const storeData = (data, path) => {
try {
    fs.writeFileSync(path, JSON.stringify(data));
} catch (err) {
    console.log(err);
}
};


function readFile (path, encoding) {
    try {
        const data = fs.readFileSync(path, encoding);
        let reply;
        (data != undefined) ? reply=JSON.parse(data) : reply=null;
        return reply;

    } catch (err) {
      return null;
    }
};
  



