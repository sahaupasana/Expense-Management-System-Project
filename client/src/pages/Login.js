import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const Login = () => {
    return (
        <>
            <div className='login-page'>
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
                    <h1> Login Form</h1>
                    <br />
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
                        <Link to="/Register">Not a User ? Register Here</Link>
                    </div>
<br/>
                    <Form.Item label={null} wrapperCol={{ span: 24 }}>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}

export default Login