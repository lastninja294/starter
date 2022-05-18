import { Input, Tabs, Button} from 'antd';
import { IoIosRemoveCircleOutline} from 'react-icons/io';
import '../../../../../shared/styles/vendors/ql-editor.css';
import './EventsCreate.styles.scss';
//////////////////////////
import {useState} from 'react';
import { Controller} from 'react-hook-form';
import WysiwygEditor from './EventsEditor';
import EventsUpload from './EventsUpload';

const EventsFields = ({ index,remove , control}) => {
  const {TabPane} = Tabs;
  const [tab, settab] = useState('uzb');
  //   const {control} = useForm();
  //   const {remove} = useFieldArray({
  //     control,
  //     name: 'events',
  //   });

  function callback(key) {
    settab(key);
  }

  return (
    <>
      <Tabs defaultActiveKey='uzb' activeKey={tab} onChange={callback}>
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
              placeholder='event title uz...'
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
            <Input {...field} placeholder='event title ru...' />
          )}
          name={`events.${index}.title.ru`}
          control={control}
        />
      </div>
      <div style={tab !== 'eng' ? {display: 'none'} : null}>
        <Controller
          render={({field}) => (
            <Input {...field} placeholder='event title en...' />
          )}
          name={`events.${index}.title.en`}
          control={control}
        />
      </div>
      <br />
      <p>description</p>
      <div style={tab !== 'uzb' ? {display: 'none'} : null}>
        <WysiwygEditor
          control={control}
          index={index}
          name={`events.${index}.description.uz`}
          placeholder='event description uz...'
        />
      </div>
      <div style={tab !== 'rus' ? {display: 'none'} : null}>
        <WysiwygEditor
          control={control}
          index={index}
          name={`events.${index}.description.ru`}
          placeholder='event description ru...'
        />
      </div>
      <div style={tab !== 'eng' ? {display: 'none'} : null}>
        <WysiwygEditor
          control={control}
          index={index}
          name={`events.${index}.description.en`}
          placeholder='event description en...'
        />
      </div>
      <br />
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
    </>
  );
};

export default EventsFields;
