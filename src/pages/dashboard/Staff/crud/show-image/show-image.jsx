import React, {useState} from 'react';
import {Modal} from 'antd';
import {BsFillFileEarmarkImageFill} from 'react-icons/bs';
import {Carousel} from 'antd';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const ShowIamges = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <BsFillFileEarmarkImageFill
        onClick={() => setVisible(true)}
        size={'20px'}
      />
      <Modal
        title='Modal 1000px width'
        centered
        footer={null}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <Carousel autoplay>
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

export default ShowIamges;