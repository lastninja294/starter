import React, {useCallback, useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Upload, Button, Input, message} from 'antd';
import axios from 'axios';

function ComposeCertificate() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [description, setDescription] = useState('');

  const clearInputs = useCallback(() => {
    setFileList([]);
    setDescription('');
  }, []);

  const showModal = () => {
    setIsVisible(true);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios.post('https://jsonplaceholder.typicode.com/photos', {
      description,
    });
    setTimeout(() => {
      clearInputs();
      setIsVisible(false);
      setLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    clearInputs();
    setIsVisible(false);
  };

  const handleChange = (info) => {
    setFileList(info.fileList.slice(-1)); // take only last element
  };

  const beforeUpload = () => {
    // file type and number of files VALIDATION
    const isOneFile = fileList.length !== 1;
    console.log('filelist: ', fileList);
    if (!isOneFile) message.error('You can upload only one file.');
    // return file;
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
          // ACCEPTED IMAGE TYPES image/jpeg || image/webp || image/png || image/svg+xml
          // image/*
          listType='picture'
          accept='image/jpeg,image/webp,image/png,image/svg+xml'
          beforeUpload={beforeUpload}
          onChange={handleChange}
          fileList={fileList}>
          <Button>Upload certificate</Button>
        </Upload>

        <Input.TextArea
          showCount
          maxLength={100}
          placeholder='Enter Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Modal>
      {/* MODAL--END */}
    </div>
  );
}

export default ComposeCertificate;
