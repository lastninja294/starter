import React, {useEffect, useState} from 'react';
import {Button, message, Modal} from 'antd';
import NewsForm from '../form';
import {createNews} from 'hooks';
import PropTypes from 'prop-types';

const Create = ({refetch}) => {
  const [visible, setVisible] = useState(false);
  const mutation = createNews();
  console.log(mutation);
  const {data, isLoading, mutate, isError, isSuccess} = mutation;
  console.log(data);
  console.log(isLoading);
  useEffect(() => {
    if (isError) message.error('Post yaratilmadi');
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
    mutate({
      id: 10,
      images: [
        'https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w700.jpg',
      ],
      vedios: ['https://www.w3schools.com/html/movie.mp4'],
      title_uz: data.title_uz,
      title_en: data.title_en,
      title_ru: data.title_ru,
      description_en: data.description_en,
      description_ru: data.description_ru,
      description_uz: data.description_uz,
      email: 'gsattorov0102@mail.ru',
      phone: '+998900077611',
    });
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
