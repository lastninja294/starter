import React, {useState} from 'react';
import {Button, Image} from 'antd';
import {IoImageOutline} from 'react-icons/io5';

function EventsImage({item}) {
  const [visible, setVisible] = useState(false);
  console.log(item);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 12px'}}>
        <IoImageOutline style={{fontSize: '1.3em'}} />
      </Button>
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {/* {item.images.map((img , i) => (
            <Image src={img} key={i} />
          ))} */}
          <Image src='https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp' />
        </Image.PreviewGroup>
      </div>
    </>
  );
}

export default EventsImage;
