import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/client';
// import Auth from '../utils/auth';
// import { addUser } from '../../../server/schemas/resolvers';
import {
    Button,
    // Checkbox,
    Form,
    Input,
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
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
// const Signup = () => {
//   const [form] = Form.useForm();
//   const onFinish = (values) => {
//     console.log('Received values of form: ', values);
//   };

const Signup = () => {
    const [form] = Form.useForm();
    const [formState, setFormState] = useState({ email: '', password: '' });
    // const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //   const mutationResponse = await addUser({
        //     variables: {
        //       email: formState.email,
        //       password: formState.password,
        //       firstName: formState.firstName,
        //       lastName: formState.lastName,
        //     },
        //   });
        //   const token = mutationResponse.data.addUser.token;
        //   Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onSubmit={handleFormSubmit}
            scrollToFirstError
        >

            <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                    {
                        type: 'array',
                        required: true,
                        message: 'Please enter your first name!',
                    },
                ]}
            >
                <Input onChange={handleChange} />
            </Form.Item>

            <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                    {
                        type: 'array',
                        required: true,
                        message: 'Please enter your last name!',
                    },
                ]}
            >
                <Input onChange={handleChange} />
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
                <Input onChange={handleChange} />
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
                <Input.Password onChange={handleChange} />
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
                <Input.Password onChange={handleChange} />
            </Form.Item>

            {/* <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
            </Form.Item> */}
            <Form.Item {...tailFormItemLayout}>
                <Button type="submit" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Signup;