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
    //defaultda file va description ishlamayabdi
    file: post?.src,
    title_uz: post?.title?.uz,
    title_en: post?.title?.en,
    title_ru: post?.title?.ru,
    description_uz: post?.description?.uz,
    description_en: post?.description?.en,
    description_ru: post?.description?.ru,
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
