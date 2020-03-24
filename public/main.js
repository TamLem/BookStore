const fs = require('fs');
const path = require('path')


/* 
fs.readFile(path.join('books.txt'), 'utf8', (data) => {
    console.log(data)
})
  */
try {
    const data = fs.readFileSync('books.txt', 'utf8')
    console.log(JSON.parse(data))
  } catch (err) {
    console.error(err)
  }