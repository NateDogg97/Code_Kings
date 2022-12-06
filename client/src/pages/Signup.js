import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import {
    Button,
    Form,
    Input,
} from 'antd';

const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 }, lg: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 12 }, md: { span: 12 }, lg: { span: 12 } }
}

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const Signup = () => { 
    const [addUser, {loading}] = useMutation(ADD_USER, {errorPolicy: 'all'});
    const [data, setData] = useState('');
    const [error, setError] = useState('');

    const handleFormSubmit = async (values) => {
        try {
            const { data } = addUser({
                variables: {
                    ...values
                },
            })
            setData(data);
            console.log(data);
        }
        catch (err) {
            setError(err);
        }
    }
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :</p>;

const onFinish = values => {
    handleFormSubmit(values);
};

    return (
        <Form
            {...formItemLayout}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >

            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your first name!',
                    },
                ]}

            >
                <Input style={{ width: '70%' }}/>
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your last name!',
                    },
                ]}

            >
                <Input style={{ width: '70%' }}/>
            </Form.Item>

            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}

            >
                <Input style={{ width: '70%' }}/>
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback

            >
                <Input.Password style={{ width: '70%' }} />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password style={{ width: '70%' }} />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit" className='signup-form-button'>
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Signup;