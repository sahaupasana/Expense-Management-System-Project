import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from "../components/Spinner";
// import FormItem from 'antd/es/form/FormItem';

const Register = () => {

  const navigate = useNavigate()
  const [Loading, setLoading] = useState(false)

  const onFinish = async (values) => {
    // console.log('Success:', values);
    try {
      setLoading(true)
      await axios.post('/users/register', values)
      message.success('Registration Successful')
      setLoading(false)
      navigate("/login")
    } catch (error) {
      setLoading(false)
      message.error('Something went wrong')
    }
  };


  return (
    <>
      <div className='register-page'>
        {Loading && <Spinner />}
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <h1> Registration Form</h1>
          <br />
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your Email-id!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>


          <div style={{ display: "flex" }}>
            <Link to="/Login">Already Registered? Login Here</Link>
          </div>
          <br />
          <Form.Item label={null} wrapperCol={{ span: 30 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default Register