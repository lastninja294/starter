import {Form, Input, Button, Space, Modal} from 'antd';
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import InputMask from 'react-input-mask';
import {useMemo, useState} from 'react';
import {createSettings} from 'hooks';

const CreateModal = () => {
  const [isVisible, setVisible] = useState(false);
  const {mutateAsync, isError, isSuccess, error, isLoading} = createSettings();

  const onFinish = (values) => {
    values.Hospitals.map((hospital) => {
      console.log(hospital);
      mutateAsync({
        name: hospital.name,
        address: hospital.address,
        phone: hospital.number,
      });
    });
  };
  useMemo(() => {
    if (isError) {
      Modal.error({
        title: 'Error',
        content: error,
      });
    }
    if (isSuccess) {
      setVisible(false);
    }
  }, [isError, isSuccess]);
  
  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          setVisible(true);
        }}>
        Create
      </Button>
      <Modal
        width={800}
        visible={isVisible}
        footer={null}
        onCancel={() => setVisible(false)}
        onOk={() => {
          setVisible(false);
        }}>
        <p>Create Modal</p>
        <Form
          style={{overflowY: 'auto', maxHeight: '60vh'}}
          name='dynamic_form_nest_item'
          onFinish={onFinish}
          autoComplete='off'>
          <Form.List name='Hospitals'>
            {(fields, {add, remove}) => (
              <>
                {fields.map(({key, name, ...restField}) => (
                  <Space
                    key={key}
                    style={{display: 'flex', marginBottom: 8}}
                    align='baseline'>
                    <Form.Item
                      {...restField}
                      name={[name, 'name']}
                      rules={[
                        {required: true, message: 'Missing hospital name'},
                      ]}>
                      <Input placeholder='Hospital Name' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'address']}
                      rules={[{required: true, message: 'Missing address'}]}>
                      <Input placeholder='Address' />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'number']}
                      rules={[
                        {required: true, message: 'Missing phone number'},
                        {
                          // create pattern for phone number
                          pattern:
                            /(?:\+\([9]{2}[8]\) [0-9]{2}\ [0-9]{3}\ [0-9]{4})/g,
                          message: 'Invalid phone number',
                        },
                      ]}>
                      <InputMask
                        mask='+(\9\98) 99 999 9999'
                        placeholder='Phone Number'>
                        {(inputProps) => <Input {...inputProps} />}
                      </InputMask>
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}>
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button loading={isLoading} type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateModal;
