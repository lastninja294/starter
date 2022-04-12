import React,{useState} from 'react';
import {Button, Modal} from 'antd';
import {AiOutlineVideoCamera} from 'react-icons/ai';
// import './EventsVideo.styles.scss';

export default function SurgeryVideo({item}){
    const[visible, setVisible] = useState(false);
    return(
        <>
            <Button type='link' onClick={()=> setVisible(true)}>
                <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
            </Button>
            <Modal
            centered
            visible={visible}
            onOk={()=> setVisible(false)}
            onCancel={()=> setVisible(false)}
            style={{minWidth: '70%', maxWidth: '100%'}}
            footer={null}
            >
            <video controls className='event-modal-video'>
          <source src={item.videoUrl} type='video/mp4' />
          <source
            src='https://www.w3schools.com/html/mov_bbb.ogg'
            type='video/ogg'
          />
        </video>
            </Modal>
        </>
    )
}