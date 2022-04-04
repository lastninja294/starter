import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {Modal, Button, Input, Upload, Form} from 'antd';
import {EditOutlined} from '@ant-design/icons';
// for editor wysiwyg
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, ContentState, convertFromHTML} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

const EditPost = ({post}) => {
  // newsDataId.post_description JSON.parsga beriladi
  const postHtml = JSON.parse(post?.description);
  const html = draftToHtml(postHtml);
  console.log(html);
  // handle Editor Defaul value
  const [state, setState] = useState({
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML(html)),
    ),
  });
  // Editor onChange value
  const editorValue = (e) => {
    const htmlEdit = draftToHtml(e);

    setState({
      editorState: EditorState.createWithContent(
        ContentState.createFromBlockArray(convertFromHTML(htmlEdit)),
      ),
    });
  };
  // modal form newspost update
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };
  //Edit form modalkalani yopuvchi fun
  const showModalForm = () => {
    setVisible(true);
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

  return (
    <>
      <EditOutlined
        key='edit'
        style={{color: '#0f0'}}
        onClick={showModalForm}
      />

      <Modal
        key={'updatepost'}
        visible={visible}
        title={'Edit Post'}
        onCancel={handleCancel}
        footer={null}
        width={800}>
        {
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
                multiple
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
                defaultEditorState={state.editorState}
                onContentStateChange={editorValue}
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
        }
      </Modal>
    </>
  );
};

export default EditPost;
EditPost.propTypes = {
  post: PropTypes.object,
};
