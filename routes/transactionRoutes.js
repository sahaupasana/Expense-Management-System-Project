const express = require ('express')
const { addTransaction, getAllTransaction , editTransaction, deleteTransaction} = require('../controllers/transactionCtrl')

//router object 
const router = express.Router()

//routes
//add transaction post method 
router.post('/add-transaction', addTransaction)

//edit transaction post method 
router.post('/edit-transaction', editTransaction)

//delete transaction post method 
router.post('/delete-transaction', deleteTransaction)

//get transactions with sending the user
router.post('/get-transaction',getAllTransaction)

module.exports = router