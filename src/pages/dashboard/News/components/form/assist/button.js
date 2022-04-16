import React from 'react'
import PropTypes from 'prop-types';
import {Button} from 'antd';
import {Controller} from 'react-hook-form';

function AppButton({control , loading}) {
  return (
    <Controller
      control={control}
      name='title'
      rules={{required: true}}
      render={() => {
        return (
          <Button
            style={{
              marginBottom: '-10px',
              marginTop: '20px',
              marginRight: '-10px',
            }}
            type='primary'
            loading={loading}
            htmlType='submit'>
            QOSHISH
          </Button>
        );
      }}
    />
  );
}

export default AppButton

AppButton.propTypes = {
  control: PropTypes.object,
  loading: PropTypes.bool
};