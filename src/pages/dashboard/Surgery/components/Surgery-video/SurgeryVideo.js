import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import './SurgeryVideo.style.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  // dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SurgeryVideo(/*{item} */) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type='link' onClick={() => setVisible(true)}>
        <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
      </Button>
      <style jsx='false'>
        {`
          .ant-modal-body {
            padding: 0 !important;
            line-height: 0 !important;
          }
        `}
      </style>
      <Modal
        // title={item.title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        style={{minWidth: '70%', maxWidth: '100%', position: 'relative'}}
        footer={null}>
        <Slider className='surgery-video-slide' {...settings}>
          {/* {item.videos.map((url) => (
            <video controls className='surgery-modal-video' key={url}>
              <source src={url} type='video/mp4' />
            </video>
          ))} */}
        </Slider>
      </Modal>
    </>
  );
}

export default SurgeryVideo;
