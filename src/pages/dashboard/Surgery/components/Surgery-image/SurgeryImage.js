import React,{useState} from 'react';
import {Button, Image} from 'antd';
import {IoImageOutline} from 'react-icons/io5';

export default function SurgeryImages( /*{item} */) {
    const[visible, setVisible] = useState(false);

    return(
        <>
      <Button type='link'>
        <IoImageOutline
          style={{fontSize: '1.3em'}}
          onClick={() => setVisible(true)}
        />
      </Button>
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {/* {item.images.map((img, key) => (
            <Image src={img} key={key} />
          ))} */}
        </Image.PreviewGroup>
      </div>
    </>
    )
}