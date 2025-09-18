import React, { useState,useEffect } from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = ({ messageApi }) => {


    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const onFinish = async (values) => {

        try {
            setLoading(true)
            const { data } = await axios.post('/users/login', values)
            setLoading(false)
            messageApi.success("Login Successful")
            localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }))
            navigate("/")
        } catch (error) {
            setLoading(false)
            messageApi.error('Something went wrong')
        }
    };

    //prevent for user login
      useEffect(()=>{
        if(localStorage.getItem('user')){
          navigate("/");
        }
      },[navigate])
    

    return (
        <>
            <div className='login-page'>

                {Loading && (
                    <div className="loading-overlay">
                        <div className="loading-card">
                            <Spinner />
                            <p className="loading-text">
                                Logging in...
                            </p>
                        </div>
                    </div>
                )}
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h1> Login Form</h1>
                    <br />
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

                    <div style={{ display: "flex" }}>
                        <Link to="/Register">Not a User ? Register Here</Link>
                    </div>
                    <br />
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