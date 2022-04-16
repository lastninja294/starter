import React, {useState} from 'react';
import {Button, Image} from 'antd';
import {IoImageOutline} from 'react-icons/io5';

function EventsImage({item}) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button
        type='link'
        onClick={() => setVisible(true)}
        style={{padding: 0, margin: '0 15px'}}>
        <IoImageOutline style={{fontSize: '1.3em'}} />
      </Button>
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {item.imageUrl.map((img) => (
            <Image src={img} key={img} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
}

export default EventsImage;
