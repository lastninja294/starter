import React, {useState} from 'react';
import {IoImageOutline} from 'react-icons/io5';
import {Image} from 'antd';
import './show-image.styles.scss';
import PropTypes from 'prop-types';
const ShowIamges = ({data, id}) => {
  const [visible, setVisible] = useState(false);
  const imagesObj = data.find((item) => item.id == id);
  // console.log('render showImage');
  return (
    <>
      <IoImageOutline
        className='icon_style'
        onClick={() => setVisible(true)}
        width={'100%'}
        size={'20px'}
      />
      <div style={{display: 'none'}}>
        <Image.PreviewGroup
          preview={{visible, onVisibleChange: (vis) => setVisible(vis)}}>
          {imagesObj?.images.map((item, index) => (
            <Image src={item} key={index} />
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ShowIamges;
ShowIamges.propTypes = {
  data: PropTypes.array,
  id: PropTypes.number,
};
