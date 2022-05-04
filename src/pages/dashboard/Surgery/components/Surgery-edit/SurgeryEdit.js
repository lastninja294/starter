import React, {useState} from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';
import './SurgeryEdit.styles.scss';

export default function SurgeryEdit({item}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type='link' onClick={() => setVisible(true)}>
        <AiOutlineEdit style={{fontSize: '1.3em'}} />
      </Button>
      <Modal
        centered
        visible={visible}
        title={item.title}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        style={{
          minWidth: '70%',
          maxWidth: '100%',
          maxHeight: '90vh',
          position: 'relative',
          overflowY: 'scroll',
        }}>
        <Form className='main__form'>
          <section className='input__title'>
                <Form.Item name={['user', 'title_uz']} label='Title Uz:'>
                  <Input type='text' placeholder='title_uz' />
                </Form.Item>
                <Form.Item name={['user', 'title_ru']} label='Title Ru:'>
                  <Input type='text' placeholder='title_uz' />
                </Form.Item>
                <Form.Item name={['user', 'title_en']} label='Title En:'>
                  <Input type='text' placeholder='title_uz' />
                </Form.Item>
          </section>

          <section className='textarea__description'>
                <Form.Item
                  name={['user', 'description_uz']}
                  label='Description Uz:'>
                  <Input.TextArea type='text' defaultValue={item.description_uz} />
                </Form.Item>
                <Form.Item
                  name={['user', 'description_ru']}
                  label='Description Ru:'>
                  <Input.TextArea type='text' defaultValue={item.description_ru} />
                </Form.Item>
                <Form.Item
                  name={['user', 'description_en']}
                  label='Description En:'>
                  <Input.TextArea type='text' defaultValue={item.description_en} />
                </Form.Item>
          </section>
        </Form>
      </Modal>
    </>
  );
}
