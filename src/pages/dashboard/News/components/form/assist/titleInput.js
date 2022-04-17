import React from 'react';
import {Input} from 'antd';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
function TitleInput({ defaultValue,control, error , name , label , id , type , ...inputProps }) {
  console.log(defaultValue);
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{required: true}}
        render={({field}) => {
          return (
            <>
              <label htmlFor={id}>{label}</label>

              <Input
                {...field}
                id={id}
                type={type}
                style={{margin: '20px 0'}}
                placeholder={`Enter the post title ${name}`}
                defaultValue={defaultValue}
                {...inputProps}
              />
              <>
                {error && (
                  <p style={{color: 'red'}}>
                    * {error?.message || 'maydoni tuldiring'}
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
