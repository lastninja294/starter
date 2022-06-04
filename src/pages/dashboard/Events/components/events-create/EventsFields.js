import {Tabs, Button} from 'antd';
import WysiwygEditor from './EventsEditor';
import EventsUpload from './EventsUpload';
import EventsInput from './EventsInput';
import {IoIosRemoveCircleOutline} from 'react-icons/io';
import './EventsCreate.styles.scss';

const EventsFields = ({index, remove, errors, register, control}) => {
  const {TabPane} = Tabs;

  return (
    <div className='events-fields'>
      <Tabs defaultActiveKey='uzb'>
        <TabPane tab='Uzbekcha' key='uzb'>
          <EventsInput
            control={control}
            index={index}
            placeholder='event title uz...'
            errors={errors?.title?.uz}
            allerrors={errors?.title}
            name={`events[${index}].title.uz`}
            register={register}
          />
          <WysiwygEditor
            control={control}
            index={index}
            name={`events[${index}].description.uz`}
            placeholder='event description uz...'
            errors={errors?.description?.uz}
            allerrors={errors?.description}
          />
        </TabPane>
        <TabPane tab='Russian' key='rus'>
          <EventsInput
            control={control}
            index={index}
            placeholder='event title ru...'
            errors={errors?.title?.ru}
            allerrors={errors?.title}
            name={`events[${index}].title.ru`}
            register={register}
          />
          <WysiwygEditor
            control={control}
            index={index}
            name={`events[${index}].description.ru`}
            placeholder='event description ru...'
            errors={errors?.description?.ru}
            allerrors={errors?.description}
          />
        </TabPane>
        <TabPane tab='English' key='eng'>
          <EventsInput
            control={control}
            index={index}
            placeholder='event title en...'
            errors={errors?.title?.en}
            allerrors={errors?.title}
            name={`events[${index}].title.en`}
            register={register}
          />
          <WysiwygEditor
            control={control}
            index={index}
            name={`events[${index}].description.en`}
            placeholder='event description en...'
            errors={errors?.description?.en}
            allerrors={errors?.description}
          />
        </TabPane>
      </Tabs>
      <EventsUpload
        control={control}
        name={`events[${index}].src`}
        errors={errors?.src}
      />
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
    </div>
  );
};

export default EventsFields;
