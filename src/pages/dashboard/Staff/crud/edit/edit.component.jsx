import React, {useState} from 'react';
import {Row, Col, Form, Upload, Input} from 'antd';
import {Modal, Button} from 'antd';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import {MdVideoLibrary} from 'react-icons/md';
import {FaRegEdit} from 'react-icons/fa';
import {api} from '../api';
import PropTypes from 'prop-types';
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
const Edit = ({id, fetchData}) => {
  const [visible, setVisible] = useState(false);
  const onFinish = async (values) => {
    try {
      const response = await api.put(`/${id}`, {
        title: values.user.title,
        description: values.user.description,
        images: [
          'https://picfiles.alphacoders.com/280/280339.jpg',
          'https://i.pinimg.com/564x/a9/6b/5e/a96b5eda4a24f081da8aaf9301304eab.jpg',
          'https://i.pinimg.com/236x/03/00/2e/03002e7c5655e96a2fa2a8ab73075761.jpg',
        ],
        videos: [],
      });
      fetchData();
      console.log(id);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log('render EDIT');
  return (
    <>
      <FaRegEdit size={'20px'} onClick={() => setVisible(true)} />
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
                  name='images'
                  valuePropName='fileList'
                  getValueFromEvent={normFile}
                  noStyle>
                  <Upload.Dragger
                    listType='picture-card'
                    name='files'
                    action='/upload.do'>
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
                    action='/upload.do'>
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
            type='primary'
            htmlType='submit'
            onClick={() => setVisible(false)}>
            Edit
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default Edit;
Edit.propTypes = {
  myFunc: PropTypes.func,
  id: PropTypes.number,
  fetchData: PropTypes.func,
};
