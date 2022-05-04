import {Button, Modal} from 'antd';
import React, {useState, useRef, memo} from 'react';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import './EventsVideo.styles.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FaPlay} from 'react-icons/fa';

const settings = {
  dots: true,
  infinite: false,
  // arrows: false,
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
  '//vjs.zencdn.net/v/oceans.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  '//vjs.zencdn.net/v/oceans.mp4',
  'https://www.w3schools.com/html/mov_bbb.mp4',
  '//vjs.zencdn.net/v/oceans.mp4',
];

function EventsVideo() {
  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 .5em'}}>
        <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
      </Button>

      <Modal
        title='video'
        centered
        visible={visible}
        onCancel={() => {
          videoRef.current?.pause();
          setVisible(false);
        }}
        style={{
          minWidth: '70%',
          maxWidth: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
        footer={null}>
        <div className='events-slider-view'>
          <Slider {...settings}>
            {item.map((member) => {
              return (
                <div className='events-slider-info' key={member}>
                  <div className='events-slider-thumb'>
                    <video
                      src={member}
                      onClick={(e) => {
                        videoRef.current?.pause();
                        videoRef.current = e.target;
                        openFullscreen(videoRef.current);
                      }}
                    />
                    <FaPlay className='media-video-icon' />
                  </div>
                  <h5 className='events-video-slide-title'>{member}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </Modal>
    </>
  );
}

export default memo(EventsVideo);
