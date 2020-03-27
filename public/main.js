const fs = require('fs');
const path = require('path')


/* 
fs.readFile(path.join('books.json'), 'utf8', (data) => {
    console.log(data)
})
  */
try {
    const data = fs.readFileSync('books.json', 'utf8')
    console.log(JSON.parse(data))
  } catch (err) {
    console.error(err)
  }