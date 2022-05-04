import React, {useState} from 'react';
import {Row, Col, Form, Upload, Input, Tabs} from 'antd';
import {Modal, Button, Select} from 'antd';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
// import {editStaffItem} from '../../api/apiFunction';
import {useUpdateData} from '../../api/apiFunction';
import {AiOutlineEdit} from 'react-icons/ai';
// import {getOneData} from '../../api/apiFunction';
// import {api} from '../api';/
import PropTypes from 'prop-types';
import './edit.styles.scss';
// import {useQuery} from 'react-query';
const {TabPane} = Tabs;
const {Option} = Select;
const prefixSelector = (
  <Select
    style={{
      width: 100,
    }}>
    <Option value='86'>+86</Option>
    <Option value='87'>+87</Option>
  </Select>
);
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
const Edit = ({data}) => {
  const [visible, setVisible] = useState(false);
  // const {data: dataONE, isLoading} = useQuery(['staff', dataID], () =>
  //   getOneData(dataID),
  // );
  // console.log(dataID);
  // console.log('editdamiz-dataONE:', dataONE);
  const {mutate, isLoading} = useUpdateData();
  const onFinish = (values) => {
    //const onFinish = async (values)
    console.log('Received values of form:', values);
    const editData = {
      id: data.id,
      title: {
        en: values.user.title_en,
        ru: values.user.title_ru,
        uz: values.user.title_uz,
      },
      description: {
        en: values.user.description_ru,
        ru: values.user.description_ru,
        uz: values.user.description_uz,
      },
      email: values.user.email,
      phone: values.user.phone,
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
    };
    console.log('EDITED:', editData);
    mutate(editData);
  };
  console.log('render - edit');
  return (
    <>
      <Button
        loading={isLoading}
        size='large'
        style={{padding: '0'}}
        type='link'
        icon={<AiOutlineEdit size={'20px'} />}
        onClick={() => {
          setVisible(true);
        }}></Button>
      <Modal
        title='Edit Staff'
        centered
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        className='event-create-modal'
        width={1000}>
        <>
          <Form
            name='validate_other'
            // {...formItemLayout}
            onFinish={onFinish}
            className='create-modal-scrollbar'
            validateMessages={validateMessages}
            initialValues={{
              'input-number': 3,
              'checkbox-group': ['A', 'B'],
              rate: 3.5,
            }}>
            <section className='event-create-box'>
              <Row>
                <Tabs style={{width: '100%'}}>
                  <TabPane tab={'UZ'} key={'uz'} forceRender={true}>
                    <p style={{textAlign: 'left', color: '#1890ff'}}>
                      Content of UZ
                    </p>
                    <Form.Item
                      name={['user', 'title_uz']}
                      initialValue={data?.title?.uz}>
                      <Input placeholder='title-uz' />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'description_uz']}
                      initialValue={data?.description?.uz}>
                      <Input.TextArea placeholder='description-uz' />
                    </Form.Item>
                  </TabPane>
                  <TabPane tab={'RU'} key={'ru'} forceRender={true}>
                    <p style={{textAlign: 'left', color: '#1890ff'}}>
                      Content of RU
                    </p>
                    <Form.Item
                      name={['user', 'title_ru']}
                      initialValue={data?.title?.ru}>
                      <Input placeholder='title-ru' />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'description_ru']}
                      initialValue={data?.description?.ru}>
                      <Input.TextArea placeholder='description-ru' />
                    </Form.Item>
                  </TabPane>
                  <TabPane tab={'EN'} key={'en'} forceRender={true}>
                    <p style={{textAlign: 'left', color: '#1890ff'}}>
                      Content of EN
                    </p>
                    <Form.Item
                      name={['user', 'title_en']}
                      initialValue={data?.title?.en}>
                      <Input placeholder='title-en' />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'description_en']}
                      initialValue={data?.description?.en}>
                      <Input.TextArea placeholder='description-en' />
                    </Form.Item>
                  </TabPane>
                </Tabs>
              </Row>
              <Row gutter={16}>
                <Col span={10}>
                  <Form.Item>
                    <Form.Item
                      name={['user', 'images']}
                      valuePropName='fileList'
                      getValueFromEvent={normFile}
                      noStyle>
                      <Upload.Dragger
                        listType='picture-card'
                        name='files'
                        accept='.png,.jpeg,.jpg'
                        action='//jsonplaceholder.typicode.com/posts/'>
                        <p className='ant-upload-drag-icon'>
                          <BsFillFileEarmarkImageFill
                            color='#1890ff'
                            size={'20px'}
                          />
                        </p>
                        <p
                          className='ant-upload-text'
                          style={{color: '#1890ff', margin: '0px'}}>
                          IMAGE
                        </p>
                      </Upload.Dragger>
                    </Form.Item>
                  </Form.Item>
                </Col>
                <Col span={14}>
                  <Form.Item
                    name={['user', 'email']}
                    rules={[{type: 'email', required: true}]}
                    initialValue={data?.email}>
                    <Input placeholder='email' />
                  </Form.Item>
                  <Form.Item
                    name={['user', 'phone']}
                    initialValue={data?.phone}
                    rules={[
                      {
                        required: true,
                        message: 'Please input your phone number!',
                      },
                    ]}>
                    <Input
                      placeholder='phone'
                      name={['user', 'phone']}
                      addonBefore={prefixSelector}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </section>
            <Button
              type='primary'
              htmlType='submit'
              onClick={() => setVisible(false)}>
              Edit
            </Button>
          </Form>
        </>
      </Modal>
    </>
  );
};
export default Edit;
Edit.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  data: PropTypes.object,
  myFunc: PropTypes.func,
  dataID: PropTypes.number,
  fetchData: PropTypes.func,
};
