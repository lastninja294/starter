import {Modal, Form, Input, Tabs, Button} from 'antd';
import {IoIosAddCircleOutline, IoIosRemoveCircleOutline} from 'react-icons/io';
import './EventsCreate.styles.scss';

const EventCreateForm = ({visible, onCreate, onCancel}) => {
  const [form] = Form.useForm();
  const {TabPane} = Tabs;
  const {TextArea} = Input;

  function callback(key) {
    console.log(key);
  }
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <>
      <Modal
        visible={visible}
        centered={true}
        title='Create a new collection'
        okText='Create'
        cancelText='Cancel'
        onCancel={onCancel}
        className='event-create-modal'
        width={1000}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}>
        <Form
          className='create-modal-scrollbar'
          form={form}
          layout='vertical'
          name='form_in_modal'
          onFinish={onFinish}
          autoComplete='off'
          initialValues={{
            modifier: 'public',
          }}>
          <Form.List name='newData'>
            {(fields, {add, remove}) => (
              <>
                {fields.map(({key, name, ...restField}) => (
                  <div key={key} className='event-create-box'>
                    <Form.Item {...restField} name={[name, 'lang']}>
                      <Tabs defaultActiveKey='1' onChange={callback}>
                        <TabPane tab='Uzbekcha' key='uzb'>
                          Content of Uzbek
                        </TabPane>
                        <TabPane tab='Russian' key='rus'>
                          Content of Russian
                        </TabPane>
                        <TabPane tab='English' key='eng'>
                          Content of English
                        </TabPane>
                      </Tabs>
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[
                        {
                          required: true,
                          message: 'Please input the title of collection!',
                        },
                      ]}>
                      <Input placeholder='event title...' />
                    </Form.Item>

                    <Form.Item {...restField} name={[name, 'description']}>
                      <TextArea rows={4} placeholder='event description...' />
                    </Form.Item>
                    <Button
                      type='link'
                      danger
                      className='event-create-btn'
                      onClick={() => remove(name)}>
                      <IoIosRemoveCircleOutline
                        style={{fontSize: '1.2em', marginRight: '4px'}}
                      />
                      Delete
                    </Button>
                  </div>
                ))}
                <Form.Item>
                  <Button
                    type='link'
                    className='event-create-btn'
                    onClick={() => add()}>
                    <IoIosAddCircleOutline
                      style={{fontSize: '1.2em', marginRight: '4px'}}
                    />
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </Modal>
    </>
  );
};

export default EventCreateForm;
