import {Form, Input, Button, Space, Modal} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {useState} from 'react';

const CreateModal = () => {
  const [isVisible, setVisible] = useState(false);
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          setVisible(true);
        }}>
        Create
      </Button>
      <Modal
        width={800}
        visible={isVisible}
        footer={null}
        onCancel={() => setVisible(false)}
        onOk={() => {
          setVisible(false);
        }}>
        <p>Create Modal</p>
        <Form
          style={{overflowY: 'auto', maxHeight: '60vh'}}
          name='dynamic_form_nest_item'
          onFinish={onFinish}
          autoComplete='off'>
          <Form.List name='Hospitals'>
            {(fields, {add, remove}) => (
              <>
                {fields.map(({key, name, ...restField}) => (
                  <Space
                    key={key}
                    style={{display: 'flex', marginBottom: 8}}
                    align='baseline'>
                    <Form.Item
                      {...restField}
                      name={[name, 'first']}
                      rules={[
                        {required: true, message: 'Missing hospital name'},
                      ]}>
                      <Input placeholder='Hospital Name' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'last']}
                      rules={[{required: true, message: 'Missing address'}]}>
                      <Input placeholder='Address' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'last']}
                      rules={[
                        {required: true, message: 'Missing phone number'},
                      ]}>
                      <Input placeholder='Phone Number' />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateModal;
