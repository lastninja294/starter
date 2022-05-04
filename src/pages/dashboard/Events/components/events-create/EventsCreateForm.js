import {Modal, Button} from 'antd';
import {IoIosAddCircleOutline} from 'react-icons/io';
import '../../../../../shared/styles/vendors/ql-editor.css';
import './EventsCreate.styles.scss';
//////////////////////////
import { useRef} from 'react';
import {useForm, useFieldArray} from 'react-hook-form';
import EventsFields from './EventsFields';

const EventsCreateForm = ({visible, onCancel}) => {
  const refFrom = useRef();
  const {handleSubmit, control, reset} = useForm();
  const {fields, append ,remove} = useFieldArray({
    control,
    name: 'events',
  });


  const handleOk = (e) => {
    e.preventDefault();
    refFrom.current?.click();
    reset({
      data: 'events',
    });
    onCancel();
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
                <EventsFields item={item} index={index} remove={remove} control={control} />
              </li>
            ))}
          </ul>
          <input type='submit' hidden={true} ref={refFrom} />
        </form>
      </Modal>
    </>
  );
};

export default EventsCreateForm;
