import React, {useState} from 'react';
import PropTypes from 'prop-types';
import draftToHtml from 'draftjs-to-html';
import {Modal} from 'antd';


// Import Slider styles
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/slider.scss';


const PostDescription = ({post}) => {
  //Slider post description modal settings
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  // modal form newspost update
  const [visible, setVisible] = useState(false);

  // post description
  const showModalDes = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  // postga yuklanga img va vidioni status seccess bolganlari
  const successUrl = post.src.filter((item) => item?.status === 'done');

  // postni korinib turadigan birinchi rasmi
  const postImgSrc = successUrl.find((item) => item?.type.startsWith('image'));

  // baackenddan kelga post descriptionni handle qilib olish
  const Html = () => {
    // newsDataId.post_description JSON.parsga beriladi
    const postHtml = JSON.parse(post?.description);
    const html = draftToHtml(postHtml);

    return {__html: html};
  };
  ///  date bilan ishlash
  const datePost = new Date(post.date);
  // get month function
  const month = (index) => {
    switch (index) {
      case 0: {
        return 'Yanvar';
      }
      case 1: {
        return 'Fevral';
      }
      case 2: {
        return 'Mart';
      }
      case 3: {
        return 'Aprel';
      }
      case 4: {
        return 'May';
      }
      case 5: {
        return 'Iyun';
      }
      case 6: {
        return 'Iyul';
      }
      case 7: {
        return 'Avgust';
      }
      case 8: {
        return 'Sentabr';
      }
      case 9: {
        return 'Oktabr';
      }
      case 10: {
        return 'Noyabr';
      }
      case 11: {
        return 'Dekabr';
      }

      default:
        break;
    }
  };
  return (
    <>
      <div
        style={{
          height: '200px',
          position: 'relative',
          display: 'grid',
          overflow: 'hidden',
          placeItems: 'center',
          borderTopRightRadius: '10px',
          borderTopLeftRadius: '10px',
        }}>
        <img
          alt={postImgSrc?.name}
          src={postImgSrc?.url}
          onClick={() => {
            showModalDes();
          }}
          style={{
            width: '100%',
            minHeight: '100%',
            position: 'absolute',
          }}
        />
      </div>

      <Modal
        key={'post'}
        visible={visible}
        title={'Post'}
        onCancel={handleCancel}
        footer={null}
        width={1100}>
        {
          <div className='modal_desc_container'>
            <div className='modal_img_contaner'>
              <Slider {...settings}>
                {successUrl.map((srcUrl, index) => (
                  <div key={index}>
                    {srcUrl?.type.startsWith('image') ? (
                      <img src={srcUrl?.url} alt={srcUrl?.name} />
                    ) : null}
                    {srcUrl?.type.startsWith('video') ? (
                      <video src={srcUrl?.url} controls muted />
                    ) : null}
                  </div>
                ))}
              </Slider>
            </div>
            <div className='modal_description'>
              <div className='modal_des_top'>
                <h1>{post?.title}</h1>
                <p style={{textAlign: 'right'}}>
                  {' '}
                  {month(datePost.getMonth()) +
                    ' ' +
                    datePost.getDay() +
                    ' ' +
                    datePost.getFullYear()}{' '}
                </p>
              </div>
              <div
                className='modal_descrip_value'
                dangerouslySetInnerHTML={Html()}
              />
            </div>
          </div>
        }
      </Modal>
    </>
  );
};

export default PostDescription;
PostDescription.propTypes = {
  post: PropTypes.object,
};
