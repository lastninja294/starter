import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, message} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import NewsForm from '../form';
import {editNewsPatch} from 'hooks';
const EditPost = ({post, refetch}) => {
  const {isLoading, mutate, isError, error, isSuccess} = editNewsPatch(
    post?.id,
  );
  // modal form newspost update
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isError) message.error(error.message);
    if (isSuccess) {
      refetch();
      message.success('Post yaratildi');
      setVisible(false);
    }
  }, [isLoading]);

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
  const onSubmit = (data) => {
    console.log('onsubmit data', data);
    // controlData vaqtichalik obyect keleib boshqalani kodi buzilmasligi uchun
    const controlData = {
      title: {
        uz: data?.title_uz,
        ru: data?.title_ru,
        en: data?.title_en,
      },
      description: {
        en: JSON.stringify(data?.description_en),
        ru: JSON.stringify(data?.description_ru),
        uz: JSON.stringify(data?.description_uz),
      },
      src: data?.file?.fileList,
    };
    mutate(controlData);
    // reset({
    //   //reset da file descripton ishlamayabdi
    //   file: {
    //     file: {},
    //     fileList: [],
    //   },
    //   title_uz: '',
    //   title_en: '',
    //   title_ru: '',
    //   description_uz: description_en,
    //   description_en: description_en,
    //   description_ru: description_en,
    // });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
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
          loading={loading}
          onSubmit={onSubmit}
          defaultValue={defaultValue}
        />
      </Modal>
    </>
  );
};

export default EditPost;
EditPost.propTypes = {
  post: PropTypes.object,
  refetch: PropTypes.func,
};
