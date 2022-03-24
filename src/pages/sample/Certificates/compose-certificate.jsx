import React, {useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Upload, Button, Input, message} from 'antd';
import './compose-certificate.styles.css';

function ComposeCertificate() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState();

  const showModal = () => {
    setIsVisible(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setIsVisible(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleChange = (info) => {
    setFileList(info.fileList.slice(-1)); // take only last element
  };

  const beforeUpload = (file) => {
    // file type and number of files VALIDATION
    const isOneFile = fileList.length !== 1;
    if (!isOneFile) message.error('You can upload only one file.');

    const isPdf = file.type === 'application/pdf';
    if (!isPdf) message.error('You can only upload PDF file.');
    console.log('condition: ', isPdf && isOneFile);
    return isPdf || Upload.LIST_IGNORE;
  };

  return (
    <div>
      <Button type='primary' onClick={showModal}>
        Create
      </Button>

      {/* MODAL--START */}
      <Modal
        title='Create Certificate'
        wrapClassName='certificates-modal-container'
        visible={isVisible}
        onOk={handleSubmit}
        onCancel={handleCancel}
        // MODAL FOOTER
        footer={[
          <Button onClick={handleCancel} key='back'>
            Cancel
          </Button>,
          <Button
            onClick={handleSubmit}
            key='submit'
            loading={loading}
            type='primary'>
            Submit
          </Button>,
        ]}>
        <Upload
          wrapClassName='upload'
          beforeUpload={beforeUpload}
          onChange={handleChange}
          fileList={fileList}>
          <Button>Upload certificate</Button>
        </Upload>

        <Input.TextArea
          showCount
          maxLength={100}
          placeholder='Enter Description'
          />
      </Modal>
      {/* MODAL--END */}
    </div>
  );
}

export default ComposeCertificate;
