import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import NewsForm from '../form';
const EditPost = ({post}) => {
  // modal form newspost update
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };
  //Edit form modalkalani yopuvchi fun
  const showModalForm = () => {
    setVisible(true);
  };

  const defaultValue = {
    title: post.title,
    file: post.src,
    description: post.description,
  };
  return (
    <>
      <Button type='link'>
        <AiOutlineEdit style={{fontSize: '1.3em'}} onClick={showModalForm} />
      </Button>
      <Modal
        visible={visible}
        title={'Edit Post'}
        onCancel={handleCancel}
        footer={null}
        width={800}>
        
        <NewsForm
          setVisible={setVisible}
          visible={visible}
          defaultValue={defaultValue}
        />
      </Modal>
    </>
  );
};

export default EditPost;
EditPost.propTypes = {
  post: PropTypes.object,
};
