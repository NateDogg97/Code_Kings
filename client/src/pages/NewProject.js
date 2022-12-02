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
        name={['project', 'name']}
        label="Project Title"
        rules={[
          {
            type: 'array',
          },
        ]}
      >
        <Input size="large" placeholder='Enter title here'style={{ width: '70%'}}/>
      </Form.Item>
      
      <Form.Item name={['project', 'description']} label="Project Description">
        <Input.TextArea placeholder='Describe your project' autoSize={{ minRows: 5, maxRows: 20}} style={{ width: '70%'}}/>
      </Form.Item>

      <Form.Item
        name={['project', 'price']}
        label="Set your bounty"
        rules={[
          {
            type: 'number',
            min: 1,
          },
        ]}
      >
        <InputNumber prefix='$' />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit Project
        </Button>
      </Form.Item>
    </Form>
  );
};
export default NewProject;

