import React, {useState} from 'react';
import {IoImageOutline} from 'react-icons/io5';
import {Button, Image} from 'antd';

function ImageView({imageUrl}) {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button type='link' onClick={() => setVisible(true)}>
        <IoImageOutline style={{fontSize: '1.3em'}} />
        <div style={{display: 'none'}}>
          <Image.PreviewGroup
            preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
            <Image src={`${imageUrl}`} />
          </Image.PreviewGroup>
        </div>
      </Button>
    </div>
  );
}

export default ImageView;
