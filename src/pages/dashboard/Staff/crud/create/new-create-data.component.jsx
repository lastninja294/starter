import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
// import {createData} from '../../api/apiFunction';
// import {useCreateData} from '../../api/apiFunction';
import {Row, Col, Form, Divider, Select, Upload, Input} from 'antd';
import {Modal, Button} from 'antd';
import {MdCreateNewFolder} from 'react-icons/md';
import {AiOutlineMinusCircle} from 'react-icons/ai';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import PropTypes from 'prop-types';
import './create-data.styles.scss';
const {Option} = Select;
// import {api} from '../api';
// const formItemLayout = {
//   labelCol: {
//     span: 6,
//   },
//   wrapperCol: {
//     span: 20,
//   },
// };
// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };
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
const Create = () => {
  const [visible, setVisible] = useState(false);
  //   const {mutate} = useCreateData();
  const onFinish = (values) => {
    console.log('Received values of form:', values);
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
        <span className='text'>CREATE</span> <MdCreateNewFolder size={'20px'} />
      </Button>
      <Modal
        title='Modal 1300px width'
        centered
        visible={visible}
        footer={null}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1300}>
        <Form
          style={{overflowY: 'auto', maxHeight: '83vh'}}
          name='dynamic_form_nest_item'
          onFinish={onFinish}
          autoComplete='off'>
          <Form.List name='users'>
            {(fields, {add, remove}) => (
              <>
                {fields.map(({key, name, ...restField}) => (
                  <Row key={key} align='middle' justify='center'>
                    <Divider plain={true}>Field {key + 1}</Divider>
                    <Col span={20}>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'title-uz']}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-uz' />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'title-ru']}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-ru' />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'title-en']}
                            rules={[
                              {
                                required: true,
                              },
                            ]}>
                            <Input placeholder='title-en' />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'description-uz']}>
                            <Input.TextArea placeholder='description-uz' />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'description-ru']}>
                            <Input.TextArea placeholder='description-ru' />
                          </Form.Item>
                        </Col>
                        <Col span={8}>
                          <Form.Item
                            {...restField}
                            name={[name, 'description-en']}>
                            <Input.TextArea placeholder='description-en' />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row gutter={16}>
                        <Col span={12}>
                          <Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'file']}
                              valuePropName='fileList'
                              getValueFromEvent={normFile}
                              noStyle>
                              <Upload.Dragger
                                listType='picture-card'
                                name='images'
                                accept='.png,.jpeg,.jpg'
                                action='//jsonplaceholder.typicode.com/posts/'>
                                <p className='ant-upload-drag-icon'>
                                  <BsFillFileEarmarkImageFill
                                    color='blue'
                                    size={'40px'}
                                  />
                                </p>
                                <p className='ant-upload-text'>
                                  Click or drag file to this area to upload
                                </p>
                                <p className='ant-upload-hint'>
                                  Support for a single or bulk upload.
                                </p>
                              </Upload.Dragger>
                            </Form.Item>
                          </Form.Item>
                        </Col>
                        <Col span={12}>
                          <Form.Item
                            {...restField}
                            name={[name, 'email']}
                            rules={[{type: 'email', required: true}]}>
                            <Input placeholder='email' />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'phone']}
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
                    </Col>
                    <Col span={1}>
                      <Button
                        type='link'
                        onClick={() => remove(name)}
                        danger
                        size={'large'}>
                        <AiOutlineMinusCircle size={'25px'} />
                      </Button>
                    </Col>
                  </Row>
                ))}
                <Row justify='center' style={{margin: '15px 0'}}>
                  <Col span={21}>
                    <Form.Item>
                      <Button
                        type='dashed'
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}>
                        Add field
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
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
