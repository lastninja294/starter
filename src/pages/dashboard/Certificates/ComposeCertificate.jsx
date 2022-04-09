import React, {useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Upload, Button, Input, Form, Space} from 'antd';
// import axios from 'axios';
import {PlusOutlined} from '@ant-design/icons';

function ComposeCertificate() {
  const [isVisible, setIsVisible] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [previewVisible, setPreviewVisible] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const [loading, setLoading] = useState(false);

  // const [description, setDescription] = useState('');

  const showModal = () => {
    setIsVisible(true);
  };

  const [form] = Form.useForm();

  const handleCancel = () => {
    setIsVisible(false);
    form.resetFields();
  };

  // FORM

  const onFinish = () => {
    console.log('finish is triggered');
    setLoading(true);
    setTimeout(() => {
      // clearInputs();
      setIsVisible(false);
      setLoading(false);
      form.resetFields();
    }, 2000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // Form Image Preview

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name);
  };

  const handleChangeUpload = (something) => {
    const {fileList} = something;
    setFileList(fileList);
  };

  const handleCancelInUpload = () => setPreviewVisible(false);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Create
      </Button>

      <Modal
        title='Create Certificate'
        visible={isVisible}
        onCancel={handleCancel}
        footer={null}
        wrapClassName='certificates-modal-container'>
        <Form
          form={form}
          layout='vertical'
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            rules={[{required: true, message: 'Please, upload certificate.'}]}
            name='certificateUrl'>
            <Upload
              listType='picture-card'
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeUpload}>
              {fileList.length === 0 ? uploadButton : null}
            </Upload>
          </Form.Item>

          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={handleCancelInUpload}>
            <img alt='' style={{width: '100%'}} src={previewImage} />
          </Modal>

          <Form.Item label='Description' name='description'>
            <Input.TextArea
              showCount
              maxLength={100}
              placeholder='Enter Description'
            />
          </Form.Item>

          <Space className='footer-buttons'>
            <Button onClick={handleCancel} key='back'>
              Cancel
            </Button>

            <Button type='primary' htmlType='submit' loading={loading}>
              Submit
            </Button>
          </Space>
        </Form>
      </Modal>
    </div>
  );
}

export default ComposeCertificate;
