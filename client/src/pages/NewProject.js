import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const NewProject = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      
      <Form.Item
        name={['user', 'title']}
        label="Project Title"
        rules={[
          {
            type: 'array',
          },
        ]}
      >
        <Input size="large" placeholder='Project Title'/>
      </Form.Item>
      <Form.Item
        name={['user', 'price']}
        label="Bounty"
        rules={[
          {
            type: 'number',
            min: 1,
          },
        ]}
      >
        <InputNumber prefix='$' />
      </Form.Item>
      
      <Form.Item name={['user', 'description']} label="Project Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default NewProject;

