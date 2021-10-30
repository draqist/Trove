import express from "express"
import cors from "cors" 
import dotenv from "dotenv"
import mongoose from "mongoose"
var request = require('request');

const app = express ()

const port = process.env.port || 3000

dotenv.config()
app.use(cors)
app.use(express.json)
app.use(express.urlencoded({ extended: false }))

const DB = process.env.DATABASE_URL; = mongoose.connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB Connection successful');
    });
const subscriptionSchema = mongoose.Schema({
    repayment_plan: {
        type: String,
        enum: ['3months', '6 months', '1 year']
    }
})
const subscription = mongoose.model('Subscription', subscriptionSchema)

app.get('https://api.flutterwave.com/v3/payment-plans',(req,res) => {
    var options = {
    'method': 'POST',
    'url': '{{BASE_API_URL}}/payment-plans',
    'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {SEC_KEY}'
    },
    body: JSON.stringify(
        {
            "amount": 5000,
            "name": "the akhlm postman plan 2", "interval": "monthly",
            "duration": 48
        })

    }
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      console.log(response.body);
    })
})

app.listen(port, () => console.log(`Listening on port: ${port}`))