const Sequelize = require ('sequelize');

const sequelize = new Sequelize( 'bookstore_tables', 'root', 'tamme0430',  {
        host: 'localhost',
        dialect: 'mysql'
})


async function authenticate () {
    try {
       await sequelize.authenticate();
       console.log('working')
   } catch (err) {
       console.log(err)
   }
}


module.exports = sequelize;