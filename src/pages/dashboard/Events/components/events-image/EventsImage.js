import React, {useState, memo} from 'react';
import {Button, Image} from 'antd';
import {IoImageOutline} from 'react-icons/io5';

function EventsImage() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 .5em'}}>
        <IoImageOutline style={{fontSize: '1.3em'}} />
      </Button>
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {/* {item.map((img, i) => (
            <Image src={img} key={i} />
          ))} */}
        </Image.PreviewGroup>
      </div>
    </>
  );
}

export default memo(EventsImage);
