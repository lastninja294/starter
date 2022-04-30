import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {EditorState} from 'draft-js';

import {yupResolver} from '@hookform/resolvers/yup';
import UploadFile from './assist/uploadFile';
import AppEditor from './assist/appEditor';
import TitleInput from './assist/titleInput';
import AppButton from './assist/button';

const schema = yup.object().shape({
  file: yup.object().required('must be select file'),
  title: yup.string().required('This field is required to be filled'),
  title_en: yup.string().required('This field is required to be filled'),
  title_ru: yup.string().required('This field is required to be filled'),
  description_uz: yup.object().required('This field is required to be filled'),
  description_en: yup.object().required('This field is required to be filled'),
  description_ru: yup.object().required('This field is required to be filled'),
});

const NewsForm = ({setVisible, defaultValue}) => {
  // const nn = JSON.parse(
  //   '{"blocks":[{"key":"clla0","text":"berdimay","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  // );
  const {title, description, file} = defaultValue;
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    //defaultda file va description ishlamayabdi
    file: {
      file: {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        type: 'image/png',
      },
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          type: 'image/png',
        },
      ],
    },
    title: title,
    title_en: title,
    title_ru: title,
    description_uz: EditorState.createEmpty(),
    description_en: EditorState.createEmpty(),
    description_ru: EditorState.createEmpty(),
  };
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data, 'sadsad');
    reset({
      //reset da file descripton ishlamayabdi
      file: {
        file: {},
        fileList: [],
      },
      title: '',
      title_en: '',
      title_ru: '',
      description_uz: EditorState.createEmpty(),
      description_en: EditorState.createEmpty(),
      description_ru: EditorState.createEmpty(),
    });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <UploadFile control={control} defaultValue={file} error={errors.file} />
      <TitleInput
        name='title'
        id='title'
        type='text'
        label='title uz '
        control={control}
        error={errors.title}
        // defaultValue={title}
      />
      <TitleInput
        name='title_en'
        id='title_en'
        type='text'
        label='title en'
        control={control}
        error={errors.title_en}
        // defaultValue={title}
      />
      <TitleInput
        name='title_ru'
        id='title_ru'
        type='text'
        label='title ru'
        control={control}
        error={errors.title_ru}
        // defaultValue={title}
      />
      <AppEditor
        name='description_uz'
        control={control}
        label=' description uz'
        error={errors.description_uz}
        defaultValue={description}
      />
      <AppEditor
        name='description_en'
        control={control}
        label=' description en'
        error={errors.description_en}
        defaultValue={description}
      />
      <AppEditor
        name='description_ru'
        control={control}
        label=' description ru'
        error={errors.description_ru}
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
