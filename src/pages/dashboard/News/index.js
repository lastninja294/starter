import React, {useState} from 'react';
import {Button, Form, Input, Modal, Upload} from 'antd';
import './index.scss';
import axios from 'axios';

import Container from './components/container';
import {posts} from './components/facedata';

// for editor wysiwyg
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import AppPageMetadata from '../../../@crema/core/AppPageMetadata';

const News = () => {
  // modal form newspost update
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  /// create post modalkani ochish
  const showModalForm = () => {
    setVisible(true);
  };
  /// create post modalkani yopish

  const handleOkForm = () => {
    form.resetFields();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };
  const handleCancelForm = () => {
    form.resetFields();
    setVisible(false);
  };
  /// update form modal

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 30,
    },
  };
  // backendga post quyish uchun zapros
  const onFinish = (values) => {
    const postDescription = JSON.stringify(values.post_description);
    console.log(postDescription);
    form.resetFields();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
    console.log('Received values of form:', values);
  };

  ///// form dregger uchun

  const [form] = Form.useForm();
  const uploadImage = async (options) => {
    const {onSuccess, onError, file} = options;
    const fmData = new FormData();
    const config = {
      headers: {'content-type': 'multipart/form-data'},
    };

    fmData.append('file', file, file.name);
    try {
      const res = await axios.post(
        `http::localhost:3030/upload`,
        fmData,
        config,
      );
      // bizni image serverga ulandi va res kelyabdi usha res bolan ishlaynim backendiga yuborish reduxga saqlash vaha kazo ...
      onSuccess('ok', res);
      form.setFieldsValue({photo: res.data.link});
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      console.log(error);
      onError({err});
    }
  };

  return (
    <>
      <AppPageMetadata title='News' />
      <>
        {/* new post created button */}
        <Button
          type='danger'
          style={{
            margin: '-20px 100px 20px auto',
          }}
          onClick={showModalForm}>
          Create
        </Button>
        {/* create post madalka form */}
        <Modal
          visible={visible}
          title='Create Post'
          onOk={handleOkForm}
          onCancel={handleCancelForm}
          footer={null}
          width={800}>
          <Form
            {...formItemLayout}
            form={form}
            name='upload_post'
            onFinish={onFinish}>
            <Form.Item name='upload_post' rules={[{required: true}]}>
              <Upload.Dragger
                name={'file'}
                customRequest={uploadImage}
                listType='picture-card'
                multiple
                accept={'image/* , video/*'}>
                {'Upload image'}
              </Upload.Dragger>
            </Form.Item>
            <Form.Item name='post_title' rules={[{required: true}]}>
              <Input placeholder='Enter the post title' />
            </Form.Item>
            <Form.Item name='post_description' rules={[{required: true}]}>
              <Editor
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 20,
              }}
              style={{
                marginBottom: '-10px',
                marginTop: '20px',
                marginRight: '-10px',
              }}>
              <Button type='primary' loading={loading} htmlType='submit'>
                QOSHISH
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        {/* posts cardlari */}
        <Container posts={posts} />
      </>
    </>
  );
};

export default News;
