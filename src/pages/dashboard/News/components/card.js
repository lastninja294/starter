import React, {useState} from 'react';
import PropTypes from 'prop-types';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';
import {Card, Modal, Button, Input, Upload, Form} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
// for editor wysiwyg
import {Editor} from 'react-draft-wysiwyg';
// my styles for card comonent
import './styles/card.scss';

// Import Slider styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/slider.scss';
const {Meta} = Card;

const MyCard = ({post}) => {
  //Slider post description modal settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  // modal form newspost update
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  // update form va post descriptionlani bosganda farqlab beruvchi
  const [modalDes, setModalDes] = useState(false);

  // post description va update form modalkalani yopuvchi fun
  const showModalForm = () => {
    setModalDes(false);
    setVisible(true);
  };

  const showModalDes = () => {
    setModalDes(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  /// update form modal

  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 30,
    },
  };

  const onFinish = (values) => {
    form.resetFields();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
    console.log('Received values of form:', values);
  };

  ///// form dregger uchun yani filelani serverga joylab response qaytaradi
  const normFile = (e) => {
    console.log('Upload event: ldkjwalkdjl', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const [form] = Form.useForm();
  const uploadImage = async (options) => {
    const {onSuccess, onError, file} = options;
    const fmData = new FormData();
    const config = {
      headers: {'content-type': 'multipart/form-data'},
    };
    fmData.append('file', file, file.name);
    try {
      const res = await axios.post(
        `http::localhost:3030/upload`,
        fmData,
        config,
      );
      // bizni image serverga ulandi va res kelyabdi usha res bolan ishlaynim backendiga yuborish reduxga saqlash vaha kazo ...
      onSuccess('ok', res);
      form.setFieldsValue({photo: res.data.link});
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      console.log(error);
      onError({err});
    }
  };
  // postga yuklanga img va vidioni status seccess bolganlari
  const successUrl = post.src.filter((item) => item?.status === 'done');

  // postni korinib turadigan birinchi rasmi
  const postImgSrc = successUrl.find((item) => item?.type.startsWith('image'));

  // baackenddan kelga post descriptionni handle qilib olish
  const Html = () => {
    // newsDataId.post_description JSON.parsga beriladi
    const postHtml = JSON.parse(post?.description);
    const html = draftToHtml(postHtml);

    return {__html: html};
  };
  // form update va modal post descripton valuelarini farqlab beradi
  const widthModalTitle = modalDes
    ? {width: 500, key: 'post', title: 'Post'}
    : {width: 800, key: 'updatepost', title: 'Update Post'};
  ///  date bilan ishlash

  const datePost = new Date(post.date);
  // get month function
  const month = (index) => {
    switch (index) {
      case 0: {
        return 'Yanvar';
      }
      case 1: {
        return 'Fevral';
      }
      case 2: {
        return 'Mart';
      }
      case 3: {
        return 'Aprel';
      }
      case 4: {
        return 'May';
      }
      case 5: {
        return 'Iyun';
      }
      case 6: {
        return 'Iyul';
      }
      case 7: {
        return 'Avgust';
      }
      case 8: {
        return 'Sentabr';
      }
      case 9: {
        return 'Oktabr';
      }
      case 10: {
        return 'Noyabr';
      }
      case 11: {
        return 'Dekabr';
      }

      default:
        break;
    }
  };
  return (
    <>
      <Card
        key={'kjknk90'}
        style={{width: 300}}
        cover={
          <img
            alt={postImgSrc?.name}
            src={postImgSrc?.url}
            onClick={() => {
              showModalDes();
            }}
          />
        }
        bordered={true}
        actions={[
          <DeleteOutlined key={'delete'} style={{color: '#f00'}} />,
          <EditOutlined
            key='edit'
            style={{color: '#0f0'}}
            onClick={showModalForm}
          />,
        ]}>
        <Meta
          onClick={() => {
            showModalDes();
          }}
          title={post?.title}
          description={
            <>
              <p style={{textAlign: 'right'}}>
                {' '}
                {month(datePost.getMonth()) +
                  ' ' +
                  datePost.getDay() +
                  ' ' +
                  datePost.getFullYear()}{' '}
              </p>
              <div dangerouslySetInnerHTML={Html()} />
            </>
          }
        />
      </Card>

      {/* post update form modal va post description modal */}

      <Modal
        key={widthModalTitle.key}
        visible={visible}
        title={widthModalTitle.title}
        onCancel={handleCancel}
        footer={null}
        width={widthModalTitle.width}>
        {modalDes ? (
          <>
            <div className='modal_img_contaner'>
              <Slider {...settings}>
                {successUrl.map((srcUrl, index) => (
                  <div key={index}>
                    {srcUrl?.type.startsWith('image') ? (
                      <img src={srcUrl?.url} alt={srcUrl?.name} />
                    ) : null}
                    {srcUrl?.type.startsWith('video') ? (
                      <video src={srcUrl?.url} controls muted />
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
            <h1>{post?.title}</h1>
            <p style={{textAlign: 'right'}}>
              {' '}
              {month(datePost.getMonth()) +
                ' ' +
                datePost.getDay() +
                ' ' +
                datePost.getFullYear()}{' '}
            </p>
            <div dangerouslySetInnerHTML={Html()} />
          </>
        ) : (
          <Form
            {...formItemLayout}
            form={form}
            name='upload_post'
            onFinish={onFinish}
            initialValues={{
              upload_file: post.src,
              post_title: post?.title,
              post_description: '<p>salom</p>',
            }}>
            <Form.Item
              name='upload_file'
              valuePropName='fileList'
              getValueFromEvent={normFile}
              rules={[{required: true}]}>
              <Upload.Dragger
                name={'file'}
                customRequest={uploadImage}
                listType='picture-card'
                accept={'image/* , video/*'}>
                {'Upload file'}
              </Upload.Dragger>
            </Form.Item>
            <Form.Item name='post_title' rules={[{required: true}]}>
              <Input placeholder='Enter the post title' />
            </Form.Item>
            <Form.Item name='post_description' rules={[{required: true}]}>
              <Editor
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 20,
              }}
              style={{
                marginBottom: '-10px',
                marginTop: '20px',
                marginRight: '-10px',
              }}>
              <Button type='primary' loading={loading} htmlType='submit'>
                YUBORISH
              </Button>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default MyCard;
MyCard.propTypes = {
  post: PropTypes.object,
};
