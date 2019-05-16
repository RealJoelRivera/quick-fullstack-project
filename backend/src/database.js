// const uri = 'postgress://test:123@localhost/realtor_solo_app';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('realtor_solo_app', 'test', '123', {
  dialect: 'postgres', host: 'localhost'
});


// exporting two databases to have it change in the server
module.exports = {

  LISTING: sequelize.define('listings', {
    listingId: { type: Sequelize.INTEGER, unique: true },
    address: Sequelize.STRING,
    price: Sequelize.NUMBER,
    description: Sequelize.STRING,
    img: Sequelize.STRING,
    realtorId: Sequelize.NUMBER,
    createdAt: Sequelize.DATE
  }),

  REALTOR: sequelize.define('realtors', {
    name: Sequelize.STRING,
    email: { type: Sequelize.STRING, unique: true },
    phone: Sequelize.STRING,
    listingIds: Sequelize.STRING,
    createdAt: Sequelize.DATE
  })
}