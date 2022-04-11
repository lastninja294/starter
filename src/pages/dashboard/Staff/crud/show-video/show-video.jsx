import React, {useState} from 'react';
import {Modal} from 'antd';
import {MdVideoLibrary} from 'react-icons/md';
import {Carousel, Button} from 'antd';
import PropTypes from 'prop-types';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ShowVideos = () => {
  const [visible, setVisible] = useState(false);
  // console.log('render show video');
  return (
    <>
      <Button
        type='primary'
        shape='round'
        onClick={() => setVisible(true)}
        size={'middle'}>
        <MdVideoLibrary size={'20px'} />
      </Button>

      <Modal
        title='Modal 1000px width'
        centered
        footer={null}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Modal>
    </>
  );
};

export default ShowVideos;
ShowVideos.propTypes = {
  data: PropTypes.array,
  id: PropTypes.number,
};
