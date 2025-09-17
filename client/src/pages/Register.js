import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
// import FormItem from 'antd/es/form/FormItem';

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Register = () => {
  return (
    <>
      <div className='register-page'>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1> Registration Form</h1>
          <br/>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email-id"
            name="email-id"
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

          
            <div style={{ display: "flex"}}>
              <Link to="/Login">Already Registered? Login Here</Link>
            </div>
<br/>
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