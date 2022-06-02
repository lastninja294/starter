import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai';
import {Button,} from 'antd';

function DeleteCertificate({}) {
  return (
    <>
      <Button type='link' onClick={() => ''}>
        <AiOutlineDelete style={{fontSize: '1.3em'}} />
      </Button>
    </>
  );
}

export default DeleteCertificate;
