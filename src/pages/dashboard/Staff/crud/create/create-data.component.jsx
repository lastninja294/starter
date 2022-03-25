import React, {useState} from 'react';
import {Modal, Button} from 'antd';
import {MdCreateNewFolder} from 'react-icons/md';
import './create-data.styles.scss';
const Create = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button className='btn' type='primary' onClick={() => setVisible(true)}>
        <span className='text'>CREATE</span> <MdCreateNewFolder size={'20px'} />
      </Button>
      <Modal
        title='Modal 1000px width'
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default Create;
