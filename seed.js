const express = require('express');
const app = express(); 
const morgan = require('morgan');
const database = require('./models.js')

app.use(morgan('dev'));
// console.log(database.sync);

database.sync({force:true})
    .then(()=>{
        console.log('Database synced!')
        // db.clse() only if using a version of node without 'finally'
    })
    .catch(err => {
        console.log('Disaster! Something went wrong! ')
        console.log(err)
    })
    .finally(() => {
    database.close()
  })
