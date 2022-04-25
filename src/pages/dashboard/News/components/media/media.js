import React, {useState} from 'react';
import {Button, Image, Modal} from 'antd';
import {IoImageOutline} from 'react-icons/io5';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MediaView = ({post, type}) => {
  const url = post?.src?.filter(
    (url) => url.status === 'done' && url?.type.startsWith(type),
  );
const [showVideo, setShowVideo] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {type === 'image' ? (
        <Button type='link' onClick={() => setVisible(true)}>
          <IoImageOutline style={{fontSize: '1.3em'}} />
        </Button>
      ) : (
        <Button type='link' onClick={() => setShowVideo(true)}>
          <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
        </Button>
      )}
      <div style={{display: 'none'}} >
        {type === 'image' ? (
          <Image.PreviewGroup
            preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
            {url.map((item, index) => (
              <Image src={item.url} key={index} />
            ))}
          </Image.PreviewGroup>
        ) : (
          <Modal
            title={type}
            centered
            visible={showVideo}
            onOk={() => setShowVideo(false)}
            onCancel={() => setShowVideo(false)}
            footer={null}
            className =' mymodal'
            >
            <Slider {...settings}>
              {url.map((item, index) => (
                <div key={index} >
                  <video src={item.url} controls  />
                </div>
              ))}
            </Slider>
          </Modal>
        )}
      </div>
    </>
  );
};

export default MediaView;

MediaView.propTypes = {
  post: PropTypes.object,
  type: PropTypes.any,
};
