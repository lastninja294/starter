import React, {useState} from 'react';
import {Button, Image} from 'antd';
import {IoImageOutline} from 'react-icons/io5';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import PropTypes from 'prop-types';
const MediaView = ({post, type}) => {
    
  const url = post?.src?.filter(
    (url) => url.status === 'done' && url?.type.startsWith(type),
  );

  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}>
        {type === 'image' ? (
          <IoImageOutline style={{fontSize: '1.3em'}} />
        ) : (
          <AiOutlineVideoCamera style={{fontSize: '1.3em'}} />
        )}
      </Button>
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {
            type === 'image'
              ? url.map((item, index) => <Image src={item.url} key={index} />)
              : null
            //  url.map((item, index) => <video src={item.url} key={index} />)
          }
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default MediaView;

MediaView.propTypes = {
  post: PropTypes.object,
  type: PropTypes.any,
};
