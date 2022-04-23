import React from 'react';
import {Input} from 'antd';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
function TitleInput({ defaultValue,control, error , name , label , id , type , ...inputProps }) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{required: true}}
        render={({field}) => {
          return (
            <>
              <label style={ { display: 'inline-block', marginTop: '15px', fontSize: '16px' }} htmlFor={id}>
                {label}
              </label>

              <Input
                {...field}
                id={id}
                type={type}
                style={{marginTop: '15px'}}
                placeholder={`Enter the post title ${name}`}
                defaultValue={defaultValue}
                {...inputProps}
              />
              <>
                {error && (
                  <p style={{color: 'red', fontSize: '12px'}}>
                    * {error?.message || 'This field is required to be filled'}
                  </p>
                )}
              </>
            </>
          );
        }}
      />
    </>
  );
}

export default TitleInput;

TitleInput.propTypes = {
  control: PropTypes.object,
  error: PropTypes.object,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string
};
