import React, {useState} from 'react';
import {IoImageOutline} from 'react-icons/io5';
import {Button, Image} from 'antd';
import './show-image.styles.scss';
import PropTypes from 'prop-types';
const ShowIamges = ({data}) => {
  const [visible, setVisible] = useState(false);
  console.log('render - img');
  return (
    <>
      <Button
        type='link'
        size='large'
        icon={<IoImageOutline size={'20px'} />}
        onClick={() => setVisible(true)}></Button>

      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {data?.src.map((item, index) => (
            <Image src={item?.url} key={index} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ShowIamges;
ShowIamges.propTypes = {
  data: PropTypes.object,
};
