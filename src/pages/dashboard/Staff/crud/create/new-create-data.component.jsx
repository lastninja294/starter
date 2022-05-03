import React, {useState} from 'react';
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
// import {createData} from '../../api/apiFunction';
import {useCreateData} from '../../api/apiFunction';
import {Row, Col, Form, Select, Upload, Input, Tabs} from 'antd';
import {Modal, Button} from 'antd';
import {MdCreateNewFolder} from 'react-icons/md';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import PropTypes from 'prop-types';
import './create-data.styles.scss';
const {Option} = Select;
const {TabPane} = Tabs;
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};
const prefixSelector = (
  <Select
    style={{
      width: 100,
    }}>
    <Option value='86'>+86</Option>
    <Option value='87'>+87</Option>
  </Select>
);
function callback(key) {
  console.log(key);
}
const Create = () => {
  const [visible, setVisible] = useState(false);
  const {mutate} = useCreateData();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
    values.users.map((item, index) => mutate({id: 7000 + index, ...item}));
  };
  //   const onFinish = (values) => {
  //     const newData = {
  //       title: values.user.title,
  //       description: values.user.description,
  //       images: [
  //         'https://picfiles.alphacoders.com/280/280339.jpg',
  //         'https://i.pinimg.com/564x/a9/6b/5e/a96b5eda4a24f081da8aaf9301304eab.jpg',
  //         'https://i.pinimg.com/236x/03/00/2e/03002e7c5655e96a2fa2a8ab73075761.jpg',
  //       ],
  //       videos: [],
  //     };
  //     mutate(newData);
  //   };
  // console.log('render Create');
  return (
    <>
      <Button className='btn' type='primary' onClick={() => setVisible(true)}>
        <span>CREATE</span> <MdCreateNewFolder size={'20px'} />
      </Button>
      <Modal
        title='Create Staff'
        centered
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        className='event-create-modal'
        width={1000}>
        <Form
          className='create-modal-scrollbar'
          name='dynamic_form_nest_item'
          onFinish={onFinish}
          autoComplete='off'>
          <Form.List name='users'>
            {(fields, {add, remove}) => (
              <>
                {fields.map(({key, name, ...restField}) => (
                  <section
                    key={key}
                    align='middle'
                    className='event-create-box'>
                    <Row>
                      <Tabs
                        defaultActiveKey='1'
                        style={{width: '100%'}}
                        onChange={callback}>
                        <TabPane tab='UZ' key='uz' forceRender={true}>
                          <p style={{textAlign: 'left', color: '#1890ff'}}>
                            Content of UZ
                          </p>
                          <Form.Item
                            {...restField}
                            name={[name, 'title_uz']}
                            initialValue={`title-uz ${key}`}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-uz' />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'description_uz']}
                            initialValue={`description-uz ${key}`}>
                            <Input.TextArea placeholder='description-uz' />
                          </Form.Item>
                        </TabPane>
                        <TabPane tab='RU' key='ru' forceRender={true}>
                          <p style={{textAlign: 'left', color: '#1890ff'}}>
                            Content of RU
                          </p>
                          <Form.Item
                            {...restField}
                            name={[name, 'title_ru']}
                            initialValue={`title-ru ${key}`}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-ru' />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'description_ru']}
                            initialValue={`description-ru ${key}`}>
                            <Input.TextArea placeholder='description-ru' />
                          </Form.Item>
                        </TabPane>
                        <TabPane tab='EN' key='en' forceRender={true}>
                          <p style={{textAlign: 'left', color: '#1890ff'}}>
                            Content of EN
                          </p>
                          <Form.Item
                            {...restField}
                            name={[name, 'title_en']}
                            initialValue={`title-en ${key}`}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-en' />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'description_en']}
                            initialValue={`description-en ${key}`}>
                            <Input.TextArea placeholder='description-en' />
                          </Form.Item>
                        </TabPane>
                      </Tabs>
                    </Row>
                    <Row gutter={16}>
                      <Col span={10}>
                        <Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'images']}
                            valuePropName='fileList'
                            initialValue={[
                              'https://picfiles.alphacoders.com/280/280339.jpg',
                            ]}
                            getValueFromEvent={normFile}
                            noStyle>
                            <Upload.Dragger
                              listType='picture-card'
                              name='images'
                              multiple
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
                          {...restField}
                          name={[name, 'email']}
                          initialValue={`${key}behzodnosirovofficial@gmail.com`}
                          rules={[{type: 'email', required: true}]}>
                          <Input placeholder='email' />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'phone']}
                          initialValue={`1213516516${key}`}
                          rules={[
                            {
                              required: true,
                              message: 'Please input your phone number!',
                            },
                          ]}>
                          <Input
                            placeholder='phone'
                            name={[name, 'phone']}
                            addonBefore={prefixSelector}
                            style={{
                              width: '100%',
                            }}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    {/* <Divider plain={true}>Field {key + 1}</Divider> */}
                    <Row justify='end'>
                      <Col>
                        <Button
                          type='dashed'
                          onClick={() => remove(name)}
                          icon={<MinusOutlined />}
                          danger>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  </section>
                ))}
                <Form.Item>
                  <Button
                    block
                    type='dashed'
                    onClick={() => add()}
                    icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Create;
Create.propTypes = {
  fetchData: PropTypes.func,
};
