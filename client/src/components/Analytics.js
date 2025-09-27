import React from 'react'
import { Progress } from 'antd'


const Analytics = ({ allTransaction }) => {

    //category
    const categories = ['salary',
        'tip',
        'freelance',
        'fees',
        'food',
        'medicine',
        'groceries',
        'bills']

    //total transactions
    const totalTransaction = allTransaction.length
    const totalIncomeTransaction = allTransaction.filter(transaction => transaction.type === 'income')
    const totalExpenseTransaction = allTransaction.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncomeTransaction.length / totalTransaction) * 100
    const totalExpensePercent = (totalExpenseTransaction.length / totalTransaction) * 100

    //total turnover
    const totalTurnover = allTransaction.reduce((
        acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnOver = allTransaction.filter(
        transaction => transaction.type === 'income').reduce
        ((acc, transaction) => acc + transaction.amount, 0)
    const totalExpenseTurnOver = allTransaction.filter(
        transaction => transaction.type === 'expense').reduce
        ((acc, transaction) => acc + transaction.amount, 0)

    const totalIncomeTurnoverPercent = (totalIncomeTurnOver / totalTurnover) * 100
    const totalExpenseTurnoverPercent = (totalExpenseTurnOver / totalTurnover) * 100

    return (
        <div className='analytics-container'>
            <div className='row m-3 '>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            Total Transaction Percentage
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'> Income : {totalIncomeTransaction.length} </h5>
                            <h5 className='text-danger'> Expense : {totalExpenseTransaction.length}</h5>

                            <div>
                                <Progress
                                    type='circle'
                                    strokeColor={'green'}
                                    className='mx-2'
                                    percent={totalIncomePercent.toFixed(0)} />
                                <Progress
                                    type='circle'
                                    strokeColor={'red'}
                                    className='mx-2'
                                    percent={totalExpensePercent.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            Total Transaction Turnover
                        </div>
                        <div className='card-body'>
                            <h5 className='text-success'> Income : {totalIncomeTurnOver} </h5>
                            <h5 className='text-danger'> Expense : {totalExpenseTurnOver}</h5>

                            <div>
                                <Progress
                                    type='circle'
                                    strokeColor={'green'}
                                    className='mx-2'
                                    percent={totalIncomeTurnoverPercent.toFixed(0)} />
                                <Progress
                                    type='circle'
                                    strokeColor={'red'}
                                    className='mx-2'
                                    percent={totalExpenseTurnoverPercent.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row m-3'>
                <div className='col-md-6'>
                    <h4>Category wise Income</h4>
                    {
                        categories.map(category => {
                            const amount = allTransaction.filter(
                                transaction => transaction.type === 'income'
                                    && transaction.category === category).reduce((
                                        acc, transaction) => acc + transaction.amount, 0)

                            return (
                                amount > 0 && (
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5>{category}</h5>
                                            <Progress
                                                percent={((amount / totalIncomeTurnOver) * 100).toFixed(0)} />
                                        </div>
                                    </div>
                                )
                            )
                        }
                        )
                    }
                </div>

                <div className='col-md-6'>
                    <h4>Category wise Expense</h4>
                    {
                        categories.map(category => {
                            const amount = allTransaction.filter(
                                transaction => transaction.type === 'expense'
                                    && transaction.category === category).reduce((
                                        acc, transaction) => acc + transaction.amount, 0)

                            return (
                                amount > 0 && (
                                    <div className='card'>
                                        <div className='card-body'>
                                            <h5>{category}</h5>
                                            <Progress
                                                percent={((amount / totalExpenseTurnOver) * 100).toFixed(0)} />
                                        </div>
                                    </div>
                                )
                            )
                        }
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Analytics