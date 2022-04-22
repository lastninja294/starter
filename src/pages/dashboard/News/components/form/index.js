import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';

import UploadFile from './assist/uploadFile';
import AppEditor from './assist/appEditor';
import TitleInput from './assist/titleInput';
import AppButton from './assist/button';
const NewsForm = ({setVisible, defaultValue}) => {
  const {title, description, file} = defaultValue;
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
    console.log(data, 'sadsad');
    reset({
      title: '',
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UploadFile control={control} defaultValue={file} />
      <TitleInput
        name='title'
        id='title'
        type='text'
        control={control}
        error={errors.title}
        defaultValue={title}
      />
      <TitleInput
        name='title_en'
        id='title_en'
        type='text'
        control={control}
        error={errors.title_en}
        defaultValue={title}
      />
      <AppEditor
        name = 'description'
        control={control}
        error={errors.description}
        defaultValue={description}
        
      />
      <AppEditor
        name = 'description_en'
        control={control}
        error={errors.description_en}
        defaultValue={description}
      />

      <AppButton control={control} loading={loading} />
    </form>
  );
};

export default NewsForm;

NewsForm.propTypes = {
  setVisible: PropTypes.func,
  defaultValue: PropTypes.object,
};
