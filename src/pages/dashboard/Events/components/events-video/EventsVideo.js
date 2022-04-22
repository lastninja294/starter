import {Button, Modal} from 'antd';
import React, {useState, useRef} from 'react';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import './EventsVideo.styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {BsPlayBtn} from 'react-icons/bs';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,

  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// full screen video func
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

// demo item
const item = [
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
];

function EventsVideo() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 1em'}}>
        <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
      </Button>

      <Modal
        title='video'
        centered
        visible={visible}
        // onOk={() => setVisible(false)}
        onCancel={() => {
          setVisible(false);
          videoRef.current.pause();
        }}
        style={{
          minWidth: '70%',
          maxWidth: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
        footer={null}>
        <div className='team-slider-view'>
          <Slider {...settings}>
            {item.map((member) => {
              return (
                <div className='team-slider-info' key={member}>
                  <div className='team-slider-thumb'>
                    <video src={member} ref={videoRef} />
                    <BsPlayBtn
                      className='media-video-icon'
                      onClick={() => {
                        openFullscreen(videoRef.current);
                      }}
                    />
                  </div>
                  <h5>{member}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </Modal>
    </>
  );
}

export default EventsVideo;
