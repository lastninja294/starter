import {Button, Modal} from 'antd';
import React, {useState} from 'react';
import {AiOutlineVideoCamera} from 'react-icons/ai';
// import ReactPlayer from 'react-player';
import './EventsVideo.styles.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function EventsVideo({item}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 12px'}}>
        <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
      </Button>
      <style jsx='true'>
        {`
          .ant-modal-body {
            padding: 0 !important;
            line-height: 0 !important;
          }
        `}
      </style>
      <Modal
        title={item?.title}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        style={{minWidth: '70%', maxWidth: '100%', position: 'relative'}}
        footer={null}>
        <Slider className='event-video-slide' {...settings}>
          {/* {item.videos.map((url, i) => (
            <div className='media-video' key={i}>
              <video controls className='event-modal-video'>
                <source src={url} type='video/mp4' />
              </video>
            </div>
          ))} */}
          <div className='media-video'>
            <video controls className='event-modal-video'>
              <source
                src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                type='video/mp4'
              />
            </video>
          </div>
        </Slider>
      </Modal>
    </>
  );
}

export default EventsVideo;
