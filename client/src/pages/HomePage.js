import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, message, Table , DatePicker } from 'antd';
import Layout from '../components/layout/Layout'
import axios from 'axios';
import Spinner from "../components/Spinner";

// Import icons
import { FaDollarSign, FaList, FaRegStickyNote } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";

const {RangePicker} = DatePicker

const HomePage = () => {

  const [messageApi, contextHolder] = message.useMessage();

  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [allTransaction, setAllTransaction] = useState(false)
  const [frequency , setFrequency] = useState('7');
  const[selectedDate , setSelectedDate] = useState([])

  //table data
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Category',
      dataIndex: 'category'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Actions',
    },
  ]

  const getAllTransactions = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      const res = await axios.post('/transactions/get-transaction', { userid: user._id , 
        frequency , selectedDate})
      setLoading(false)
      setAllTransaction(res.data)
      console.log(res.data)

    } catch (error) {
      console.log(error)
      messageApi.error("Fetch issue with transaction")
      setLoading(false)
    }
  }

  //useeffect hook 
  useEffect(() => {
    getAllTransactions()
  }, [frequency , selectedDate])

  //form handling 
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transactions/add-transaction', { ...values, userid: user._id })
      setLoading(false)
      messageApi.success("Transaction added successfully")
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      messageApi.error("Failed to add transaction")
    }
  }

  return (
    <Layout>
      {contextHolder}
      {loading && <Spinner />}
      <div className='filters'>

        <div>
          <h6>Select Frequency</h6>
          <Select value = {frequency} onChange={(values)=>setFrequency(values)}>
            <Select.Option value ='7'>Last 1 Week</Select.Option>
            <Select.Option value ='30'>Last 1 Month</Select.Option>
            <Select.Option value = '365'>Last 1 Year</Select.Option>
            <Select.Option value = 'custom'>Custom</Select.Option>
          </Select>
          {frequency === 'custom' && <RangePicker value = {selectedDate} onChange ={(values) =>setSelectedDate(values)}/>}
        </div>

        <div>
          <button className='btn btn-primary'
            onClick={() => setShowModal(true)}> Add New </button>
        </div>
      </div>
      <div className='content'>
        <Table columns={columns} dataSource={allTransaction} />
      </div>

      <Modal title='Add Transaction'
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}>

        <Form layout='vertical' onFinish={handleSubmit}>

          <Form.Item label={<span><FaDollarSign className="icon" /> Amount</span>} name='amount'>
            <Input type="text" />
          </Form.Item>

          <Form.Item label={<span><FaList className="icon" /> Type</span>} name='type'>
            <Select>
              <Select.Option value="income"> Income </Select.Option>
              <Select.Option value="expense"> Expense </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={<span><MdCategory className="icon" /> Category</span>} name='category'>
            <Select>
              <Select.Option value="salary"> Salary </Select.Option>
              <Select.Option value="tip"> Tip</Select.Option>
              <Select.Option value="freelance"> Freelance</Select.Option>
              <Select.Option value="fees"> Fees</Select.Option>
              <Select.Option value="food"> Food</Select.Option>
              <Select.Option value="medicine"> Medicine</Select.Option>
              <Select.Option value="groceries"> Groceries</Select.Option>
              <Select.Option value="bills"> Other Bills</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label={<span><FaRegStickyNote className="icon" /> Description</span>} name='description'>
            <Input type="text" />
          </Form.Item>

          <Form.Item label={<span><MdDateRange className="icon" /> Date</span>} name='date'>
            <Input type="date" />
          </Form.Item>

          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary'> {" "} SAVE </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  )
}

export default HomePage