import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import NewsForm from '../form';

const Create = () => {
  const [visible, setVisible] = useState(false);
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
          setVisible={setVisible}
          visible={visible}
          defaultValue={defaultValue}
        />
      </Modal>
    </>
  );
};

export default Create;
