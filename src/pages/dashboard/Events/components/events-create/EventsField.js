import {Form, Input, Button} from 'antd';
import {IoIosAddCircleOutline, IoIosRemoveCircleOutline} from 'react-icons/io';

const EventsField = () => {
  const {TextArea} = Input;

  return (
    <Form.List name='newData'>
      {(fields, {add, remove}) => (
        <div>
          {fields.map(({key, name, ...restField}) => (
            <div key={key} className='event-create-box'>
              <Form.Item name='data1'>
                <Form.Item
                  {...restField}
                  name={[name, 'title_uz']}
                  rules={[
                    {
                      required: true,
                      message: 'Please input the title of collection!',
                    },
                  ]}>
                  <Input placeholder='event title...' />
                </Form.Item>

                <Form.Item {...restField} name={[name, 'description_uz']}>
                  <TextArea rows={4} placeholder='event description...' />
                </Form.Item>
              </Form.Item>

              <Form.Item name='data2'>
                <Form.Item
                  {...restField}
                  name={[name, 'title_ru']}
                  rules={[
                    {
                      required: true,
                      message: 'Please input the title of collection!',
                    },
                  ]}>
                  <Input placeholder='event title...' />
                </Form.Item>

                <Form.Item {...restField} name={[name, 'description_ru']}>
                  <TextArea rows={4} placeholder='event description...' />
                </Form.Item>
              </Form.Item>

              <Form.Item name='data3'>
                <Form.Item
                  {...restField}
                  name={[name, 'title_en']}
                  rules={[
                    {
                      required: true,
                      message: 'Please input the title of collection!',
                    },
                  ]}>
                  <Input placeholder='event title...' />
                </Form.Item>

                <Form.Item {...restField} name={[name, 'description_en']}>
                  <TextArea rows={4} placeholder='event description...' />
                </Form.Item>
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
        </div>
      )}
    </Form.List>
  );
};

export default EventsField;
