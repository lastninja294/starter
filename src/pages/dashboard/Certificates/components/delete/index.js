import React from 'react';
import PropTypes from 'prop-types';
import {AiOutlineDelete} from 'react-icons/ai';
import {Button, Popconfirm, message} from 'antd';
import {deleteCertificates} from 'hooks';

function DeleteCertificate({refetch, id}) {
  const {mutateAsync} = deleteCertificates(id);

  const handleConfirm = () => {
    mutateAsync()
      .then(() => {
        message.success('Successfully deleted.');
        refetch();
      })
      .catch((err) => {
        message.error(err.message);
      });
  };

  const handleCancel = () => {
    message.error('Cancelled deletion.');
  };
  return (
    <Popconfirm
      placement='left'
      title='Really? Rostanmi?'
      okText='Ha'
      cancelText="Yog'e"
      onCancel={handleCancel}
      onConfirm={handleConfirm}>
      <Button type='link'>
        <AiOutlineDelete style={{fontSize: '1.3em'}} />
      </Button>
    </Popconfirm>
  );
}

export default DeleteCertificate;

DeleteCertificate.propTypes = {
  refetch: PropTypes.func.isRequired,
  id: PropTypes.number,
};
