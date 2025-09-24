import React, { useState } from 'react';
import { Modal, Form, Input, Select ,message } from 'antd';
import Layout from '../components/layout/Layout'
import axios from 'axios';
import Spinner from "../components/Spinner";

// Import icons
import { FaDollarSign, FaList, FaRegStickyNote } from "react-icons/fa";
import { MdCategory, MdDateRange } from "react-icons/md";


const HomePage = () => {

  const [showModal, setShowModal] = useState(false)
  const[loading,setLoading] = useState(false)

  const [messageApi, contextHolder] = message.useMessage();
  //form handling 
  const handleSubmit = async(values) => {
   try {
    const user = JSON.parse(localStorage.getItem('user'))
    setLoading(true)
    await axios.post('/transactions/add-transaction', {...values ,userid:user._id})
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
      {loading && <Spinner/>}
      <div className='filters'>
        <div>Range Filters</div>
        <div>
          <button className='btn btn-primary'
            onClick={() => setShowModal(true)}> Add New </button>
        </div>
      </div>
      <div className='content'></div>

      <Modal title='Add Transaction'
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}>

        <Form layout='vertical' onFinish={handleSubmit}>
          
          <Form.Item label={<span><FaDollarSign className="icon" /> Amount</span>}name='amount'>
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