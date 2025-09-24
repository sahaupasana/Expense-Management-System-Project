const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User id is required"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
    type: {
        type: String,
        required: [true, "Type is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },
    description: {
        type: String,
        required: [true, "Description of transaction is required"]
    },
    date: {
        type: String,
        required: [true, "Date is required"]
    }
}, { timestamps: true })

const transactionModel = mongoose.model('transactions', transactionSchema)
module.exports=transactionModel;