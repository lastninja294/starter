import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import {Button} from 'antd';

function EditCertificate({}) {
  return (
    <>
      <Button type='link' onClick={() => ''}>
        <AiOutlineEdit style={{fontSize: '1.3em'}} />
      </Button>
    </>
  );
}

export default EditCertificate;
