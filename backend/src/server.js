const express = require('express');
const cors = require('cors');
const app = express();
const bodyParder = require('body-parser');
const database = require('./database.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('realtor_solo_app', 'test', '123', {
  dialect: 'postgres', host: 'localhost'
});
// const REALTOR = database.REALTOR;
const { REALTOR } = database;
const { LISTING } = database;

const PORT = 3000;
app.use(bodyParder.json());
app.use(cors());

// harcoded Luis in to see if the DB works and it does!

// REALTOR.sync();
//   .then(() => REALTOR.create({
//     name: 'Luis',
//     email: "luis@gmail.com",
//     phone: 123456789,
//   }))



app.get('/realtors', (req, res) => {
  // get req. to see all realtors
  REALTOR.findAll().then(data => {
    res.status(200)
      .send(data)
  })
    .catch(err => console.error(err));
  // res.end();
  return;
})

app.post('/realtors', (req, res) => {
  // console.log(req.body);
  REALTOR.create(req.body)
    .then(data => {
      let { name, email, phone, listingIds } = data;
      res.set({ 'Content-Type': "application/json" })
        .status(200)
        .send(`${name}, ${email}, ${phone}`);
      return;
    })
    .catch(err => {
      console.error(err)
        .status(404)
        .end();
      return;
    });
  return;
})

app.put('/realtors/:name', (req, res) => {
  // console.log(req.params)
  // console.log(req.body)
  REALTOR.findOne({ where: { name: req.params.name } })
    .then(data => {

      let { name, email, phone, listingIds } = data;
      // console.log('DATA', name, email, phone);
      // console.log(data)
      const updatedStudent = data.update({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
      }).then(idk => console.log('THE CONSOLE LOG I NEED', idk))


      res.set({ 'Content-Type': "application/json" })
      // .status(200)
      // .send(updatedStudent);
      return;
    })
    .catch(err => {
      console.error(err)
      // .status(404)
      // .end();
      return;
    })
  return;
})

app.delete('/realtors/:name', (req, res) => {
  console.log(req.params);
  REALTOR.destroy({ where: { name: req.params.name } })
  res.status(200)
    .send(`Deleted Realtor ${req.params.name}`)
  return;
})

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`App listening on http://localhost:${PORT}`);
});