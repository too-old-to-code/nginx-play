const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://mongodb/customers')
    .then(() => console.log('Mongoose started'))
    .catch(err => console.log('Error'))