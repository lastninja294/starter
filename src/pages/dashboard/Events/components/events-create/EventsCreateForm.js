import {Modal, Input, Tabs, Button} from 'antd';
import {IoIosAddCircleOutline, IoIosRemoveCircleOutline} from 'react-icons/io';
import '../../../../../shared/styles/vendors/ql-editor.css';
import './EventsCreate.styles.scss';
//////////////////////////
import {useState, useRef} from 'react';
import {useForm, useFieldArray, Controller} from 'react-hook-form';
import WysiwygEditor from './EventsEditor';
import EventsUpload from './EventsUpload';

const EventCreateForm = ({visible, onCancel}) => {
  const {TabPane} = Tabs;
  const [tab, settab] = useState('uzb');
  const refFrom = useRef();
  const {handleSubmit, control, reset} = useForm();
  const {fields, append, remove} = useFieldArray({
    control,
    name: 'events',
  });

  function callback(key) {
    settab(key);
  }
  const handleOk = (e) => {
    e.preventDefault();
    refFrom.current?.click();
    reset({
      data: 'events',
    });
  };
  const handleCancel = () => {
    onCancel();
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
        className='events-create-modal'
        width={1000}
        footer={
          <div className='events-modal-footer'>
            <Button
              type='link'
              onClick={() => append()}
              className='events-create-btn'>
              <IoIosAddCircleOutline
                style={{fontSize: '1.2em', marginRight: '4px'}}
              />
              Add field
            </Button>
            <div>
              <Button key='back' onClick={handleCancel}>
                Cancel
              </Button>
              <Button key='submit' type='primary' onClick={handleOk}>
                Submit
              </Button>
            </div>
          </div>
        }>
        <form
          className='events-modal-scrollbar'
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}>
          <ul>
            {fields.map((item, index) => (
              <li key={item.id} className='events-create-box'>
                <Tabs
                  defaultActiveKey='uzb'
                  activeKey={tab}
                  onChange={callback}>
                  <TabPane tab='Uzbekcha' key='uzb' />
                  <TabPane tab='Russian' key='rus' />
                  <TabPane tab='English' key='eng' />
                </Tabs>
                <br />
                <p>title</p>

                <div style={tab !== 'uzb' ? {display: 'none'} : null}>
                  <Controller
                    render={({field}) => (
                      <Input
                        {...field}
                        placeholder='event title...uz'
                        rules={[
                          {
                            required: true,
                            message: 'Please input the title of collection!',
                          },
                        ]}
                      />
                    )}
                    name={`events.${index}.title.uz`}
                    control={control}
                  />
                </div>
                <div style={tab !== 'rus' ? {display: 'none'} : null}>
                  <Controller
                    render={({field}) => (
                      <Input {...field} placeholder='event title...ru' />
                    )}
                    name={`events.${index}.title.ru`}
                    control={control}
                  />
                </div>
                <div style={tab !== 'eng' ? {display: 'none'} : null}>
                  <Controller
                    render={({field}) => (
                      <Input {...field} placeholder='event title...en' />
                    )}
                    name={`events.${index}.title.en`}
                    control={control}
                  />
                </div>
                <p>description</p>
                <div style={tab !== 'uzb' ? {display: 'none'} : null}>
                  <WysiwygEditor
                    control={control}
                    index={index}
                    name={`events.${index}.description.uz`}
                  />
                </div>
                <div style={tab !== 'rus' ? {display: 'none'} : null}>
                  <WysiwygEditor
                    control={control}
                    index={index}
                    name={`events.${index}.description.ru`}
                  />
                </div>
                <div style={tab !== 'eng' ? {display: 'none'} : null}>
                  <WysiwygEditor
                    control={control}
                    index={index}
                    name={`events.${index}.description.en`}
                  />
                </div>
                <p>pictures</p>
                <EventsUpload />

                <br />
                <Button
                  type='link'
                  danger
                  onClick={() => remove(index)}
                  className='events-create-btn'>
                  <IoIosRemoveCircleOutline
                    style={{fontSize: '1.2em', marginRight: '4px'}}
                  />
                  Delete
                </Button>
              </li>
            ))}
          </ul>
          <input type='submit' hidden={true} ref={refFrom} />
        </form>
      </Modal>
    </>
  );
};

export default EventCreateForm;
