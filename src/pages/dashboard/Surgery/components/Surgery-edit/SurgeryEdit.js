import React, {useState} from 'react';
import {Button, Modal, Form, Input} from 'antd';
import {AiOutlineEdit} from 'react-icons/ai';

export default function SurgeryEdit({item}) {
    const [visible, setVisible] = useState(false);
    return(
        <>
            <Button type='link' onClick={() => setVisible(true)}>
                <AiOutlineEdit style={{fontSize: '1.3em'}}/>
            </Button>
            <Modal
            centered
            visible={visible}
            title={item.title}
            onOk={() => setVisible(false)}
            onCancel={() => setVisible(false)}
            footer={null}
            style={{minWidth: '70%', maxWidth: '100%', position: 'relative'}}
            >
                <Form>
                <Input type='text' defaultValue={item.title}/>
                </Form>
            </Modal>
        </>
    )
};