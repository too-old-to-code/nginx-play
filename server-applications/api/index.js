require('./db/init-db')
const express = require('express');
const app = express();
const Customer = require('./models/customer')
const bodyParser = require('body-parser')
// const cors = require('cors')

// app.use(cors())
app.use(bodyParser.json())

app.post('/customers', async (req, res) => {
    const customer = new Customer(req.body)
    await customer.save()
    res.send('Hello')
})

app.get('/customers', async (req, res) => {
    try {

        const customers = await Customer.find({})
        res.send(customers)
    } catch (err) {
        res.send(err)
    }
})

app.get('/other', (req, res)  => {
    res.send('This tests the other routes')
})


app.listen(3000)

