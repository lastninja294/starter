import React, {useState} from 'react';
// import {createData} from '../../api/apiFunction';
import {useCreateData} from '../../api/apiFunction';
import {Row, Col, Form, Upload, Input} from 'antd';
import {Modal, Button} from 'antd';
import {MdCreateNewFolder} from 'react-icons/md';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import {MdVideoLibrary} from 'react-icons/md';
import PropTypes from 'prop-types';
import './create-data.styles.scss';
// import {api} from '../api';
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 20,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
const Create = () => {
  const [visible, setVisible] = useState(false);
  const {mutate} = useCreateData();
  const onFinish = (values) => {
    const newData = {
      title: values.user.title,
      description: values.user.description,
      images: [
        'https://picfiles.alphacoders.com/280/280339.jpg',
        'https://i.pinimg.com/564x/a9/6b/5e/a96b5eda4a24f081da8aaf9301304eab.jpg',
        'https://i.pinimg.com/236x/03/00/2e/03002e7c5655e96a2fa2a8ab73075761.jpg',
      ],
      videos: [],
    };
    mutate(newData);
  };
  // console.log('render Create');
  return (
    <>
      <Button className='btn' type='primary' onClick={() => setVisible(true)}>
        <span className='text'>CREATE</span> <MdCreateNewFolder size={'20px'} />
      </Button>
      <Modal
        title='Modal 1000px width'
        centered
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <Form
          name='validate_other'
          {...formItemLayout}
          onFinish={onFinish}
          validateMessages={validateMessages}
          initialValues={{
            'input-number': 3,
            'checkbox-group': ['A', 'B'],
            rate: 3.5,
          }}>
          <Row>
            <Col span={12}>
              <Form.Item
                name={['user', 'title']}
                label='Title'
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'description']} label='Description'>
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label='Dragger'>
                <Form.Item
                  name='file'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}
                  noStyle>
                  <Upload.Dragger
                    listType='picture-card'
                    name='images'
                    accept='.png,.jpeg,jpg'
                    action='//jsonplaceholder.typicode.com/posts/'>
                    <p className='ant-upload-drag-icon'>
                      <BsFillFileEarmarkImageFill color='blue' size={'40px'} />
                    </p>
                    <p className='ant-upload-text'>
                      Click or drag file to this area to upload
                    </p>
                    <p className='ant-upload-hint'>
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
              <Form.Item label='Dragger'>
                <Form.Item
                  name='videos'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}
                  noStyle>
                  <Upload.Dragger
                    listType='picture-card'
                    name='files'
                    action='//jsonplaceholder.typicode.com/posts/'>
                    <p className='ant-upload-drag-icon'>
                      <MdVideoLibrary color='blue' size={'40px'} />
                    </p>
                    <p className='ant-upload-text'>
                      Click or drag file to this area to upload
                    </p>
                    <p className='ant-upload-hint'>
                      Support for a single or bulk upload.
                    </p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}></Form.Item>
          <Button
            onClick={() => setVisible(false)}
            type='primary'
            htmlType='submit'>
            Create
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default Create;
Create.propTypes = {
  fetchData: PropTypes.func,
};
