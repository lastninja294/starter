import React, {useEffect, useState} from 'react';
import {Button, message, Modal} from 'antd';
import NewsForm from '../form';
import {createNews} from 'hooks';
import PropTypes from 'prop-types';

const Create = ({refetch}) => {
  const [visible, setVisible] = useState(false);
  const mutation = createNews();
  console.log(mutation);
  const {isLoading, mutate, isError, error, isSuccess} = mutation;

  useEffect(() => {
    if (isError) message.error(error.message);
    if (isSuccess) {
      refetch();
      message.success('Post yaratildi');
      setVisible(false);
    }
  }, [isLoading]);

  const emptyEditor =
    '{"blocks":[{"key":"clla0","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[{}],"entityRanges":[],"data":{}}],"entityMap":{}}';
  const defaultValue = {
    file: [],
    title_uz: '',
    title_en: '',
    title_ru: '',
    description_uz: emptyEditor,
    description_en: emptyEditor,
    description_ru: emptyEditor,
  };
  // create post modalkani ochish
  const showModalForm = () => {
    setVisible(true);
  };
  // create post modalkani yopish
  const handleCancelForm = () => {
    setVisible(false);
  };
  const onSubmit = (data) => {
    console.log('create data ', data);
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
      src: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://www.imgacademy.com/sites/default/files/2009-stadium-about.jpg',
          type: 'image/png',
        },
        {
          uid: '-2',
          name: 'image2.png',
          status: 'done',
          url: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/14/yvA5SpUH-IMG-Worlds-1200x900.jpg',
          type: 'image/',
        },
        {
          uid: '-3',
          name: 'image3.png',
          status: 'done',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/BMW_G20%2C_Paris_Motor_Show_2018%2C_IMG_0493.jpg',
          type: 'image/jpeg',
        },
      ],
      email: 'gsattorov0102@mail.ru',
      phone: '+998900077611',
      date: new Date(),
    };
    mutate(controlData);
  };
  return (
    <>
      {/* new post created button */}
      <Button
        type='primary'
        style={{
          marginRight: 'auto',
          marginBottom: '20px',
          fontSize: '16px',
        }}
        onClick={showModalForm}>
        Create
      </Button>
      {/* create post madalka form */}
      <Modal
        visible={visible}
        title='Create Post'
        onCancel={handleCancelForm}
        footer={null}
        width={800}
        style={{height: '800px'}}>
        <NewsForm
          loading={isLoading}
          defaultValue={defaultValue}
          onSubmit={onSubmit}
        />
      </Modal>
    </>
  );
};

export default Create;

Create.propTypes = {
  refetch: PropTypes.func,
};
