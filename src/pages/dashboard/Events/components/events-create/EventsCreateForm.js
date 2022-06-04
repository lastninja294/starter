import {Modal, Button} from 'antd';
import {IoIosAddCircleOutline} from 'react-icons/io';
import '../../../../../shared/styles/vendors/ql-editor.css';
import './EventsCreate.styles.scss';
import {useRef} from 'react';
import {useForm, useFieldArray} from 'react-hook-form';
import EventsFields from './EventsFields';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
//////////////////////////////
import { useMutation } from 'react-query';
import axios from 'axios';


const schema = yup.object().shape({
  events: yup.array().of(
    yup.object().shape({
      title: yup.object().shape({
        uz: yup.string().required("*Maydon to'ldirilishi kerak"),
        ru: yup.string().required("*Maydon to'ldirilishi kerak"),
        en: yup.string().required("*Maydon to'ldirilishi kerak"),
      }),
      description: yup.object().shape({
        uz: yup.object().required("*Maydon to'ldirilishi kerak"),
        ru: yup.object().required("*Maydon to'ldirilishi kerak"),
        en: yup.object().required("*Maydon to'ldirilishi kerak"),
      }),
      src: yup.object().required('*No file'),
    }),
  ),
});

const EventsCreateForm = ({visible, onCancel, onCreate}) => {
  const {mutate} = useMutation((newTodo) => {
    axios
      .post('https://axiosuchunsinovapi.herokuapp.com/staff', newTodo)
      .then((res) => {
        alert(res.data);
      });
  });

  const refFrom = useRef();
  const {
    register,
    handleSubmit,
    control,
    reset,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'events',
  });

  const handleOk = () => {
    refFrom.current?.click();
    // reset({
    //   data: 'events',
    // });
    // onCancel();
    onCreate();
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
          onSubmit={handleSubmit((data) => {
            mutate(data.events[0]);
          })}
          className='events-modal-scrollbar'>
          <ul>
            {fields.map((item, index) => {
              console.log(item, index, 'item, index');
              return (
                <li key={item.id} className='events-create-box'>
                  <EventsFields
                    item={item}
                    index={index}
                    remove={remove}
                    control={control}
                    errors={errors.events?.[index]}
                    register={register}
                  />
                </li>
              );
            })}
          </ul>
          <input type='submit' hidden={true} ref={refFrom} />
        </form>
      </Modal>
    </>
  );
};

export default EventsCreateForm;
