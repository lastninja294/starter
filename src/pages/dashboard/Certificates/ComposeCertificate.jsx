import React, {useCallback, useState} from 'react';
import Modal from 'antd/lib/modal/Modal';
import {Upload, Button, Input} from 'antd';
import axios from 'axios';
import {PlusOutlined} from '@ant-design/icons';

function ComposeCertificate() {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [previewVisible, setPreviewVisible] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const [description, setDescription] = useState('');
  console.log(fileList);
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

  const handleCancelUpload = () => setPreviewVisible(false);

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleChangeUpload = (something) => {
    const {fileList} = something;
    setFileList(fileList);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name);
  };

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
          listType='picture-card'
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChangeUpload}>
          {fileList.length === 0 ? uploadButton : null}
        </Upload>

        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancelUpload}>
          <img alt='example' style={{width: '100%'}} src={previewImage} />
        </Modal>

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
