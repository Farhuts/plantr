const express = require('express');
const app = express();
const morgan = require('morgan');
const {db} = require('./models')

app.use(morgan('dev'));

// should be an array
// Vegetable.create({
//   name: 'Neuquen',
//   order_: 0
// });
// Vegetable.create({
//   name: 'General Roca',
//   order_: 1
// });

db.sync({force:true})
    .then(()=>{
        console.log('Database synced!')
        // db.clse() only if using a version of node without 'finally'
    })
    .catch(err => {
        console.log('Disaster! Something went wrong! ')
        console.log(err)
    })
    .finally(() => {
    db.close()
  })
