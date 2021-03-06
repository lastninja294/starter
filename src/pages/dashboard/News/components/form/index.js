import React from 'react';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';

import {yupResolver} from '@hookform/resolvers/yup';
import UploadFile from './assist/uploadFile';
import AppEditor from './assist/appEditor';
import TitleInput from './assist/titleInput';
import AppButton from './assist/button';
import {Tabs} from 'antd';
import './form.scss';
const {TabPane} = Tabs;
const schema = yup.object().shape({
  file: yup.object().required('must be select file'),
  title_uz: yup.string().required('This field is required to be filled'),
  title_en: yup.string().required('This field is required to be filled'),
  title_ru: yup.string().required('This field is required to be filled'),
  description_uz: yup.object().required('This field is required to be filled'),
  description_en: yup.object().required('This field is required to be filled'),
  description_ru: yup.object().required('This field is required to be filled'),
});

const NewsForm = ({loading, defaultValue, onSubmit}) => {
  // const nn = JSON.parse(
  //   '{"blocks":[{"key":"clla0","text":"berdimay","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  // );
  const {
    title_en,
    title_ru,
    title_uz,
    description_uz,
    description_en,
    description_ru,
    file,
  } = defaultValue;
  const defaultValues = {
    //defaultda file va description ishlamayabdi
    file: [],
    title_uz: title_uz,
    title_en: title_en,
    title_ru: title_ru,
    description_uz: description_uz,
    description_en: description_en,
    description_ru: description_ru,
  };
  const {
    handleSubmit,
    control,
    // reset,
    formState: {errors},
  } = useForm({defaultValues, resolver: yupResolver(schema)});
  console.log(errors);

  return (
    <div style={{position: 'relative'}}>
      <form className='newsForm' onSubmit={handleSubmit(onSubmit)}>
        <Tabs defaultActiveKey='uz'>
          <UploadFile
            control={control}
            defaultValue={file}
            error={errors.file}
          />
          <TabPane tab='UZ' key='uz' forceRender={true}>
            <TitleInput
              name='title_uz'
              id='title'
              type='text'
              label='title uz '
              control={control}
              error={errors.title_uz}
              defaultValue={title_uz}
            />
            <AppEditor
              name='description_uz'
              control={control}
              label=' description uz'
              error={errors.description_uz}
              defaultValue={description_uz}
            />
          </TabPane>
          <TabPane tab='EN' key='en' forceRender={true}>
            <TitleInput
              name='title_en'
              id='title_en'
              type='text'
              label='title en'
              control={control}
              error={errors.title_en}
              defaultValue={title_uz}
            />
            <AppEditor
              name='description_en'
              control={control}
              label=' description en'
              error={errors.description_en}
              defaultValue={description_en}
            />
          </TabPane>
          <TabPane tab='RU' key='ru' forceRender={true}>
            <TitleInput
              name='title_ru'
              id='title_ru'
              type='text'
              label='title ru'
              control={control}
              error={errors.title_ru}
              defaultValue={title_ru}
            />
            <AppEditor
              name='description_ru'
              control={control}
              label=' description ru'
              error={errors.description_ru}
              defaultValue={description_en}
            />
          </TabPane>
        </Tabs>
        <AppButton control={control} loading={loading} />{' '}
      </form>
      {(errors?.title_en ||
        errors?.title_ru ||
        errors?.title_uz ||
        errors?.description_en ||
        errors?.description_ru ||
        errors?.description_uz ||
        errors?.file) && (
        <p
          style={{
            color: 'red',
            fontSize: '12px',
            textAlign: 'right',
            position: 'absolute',
            right:0,
            margin:0,
            bottom: '0px'
          }}>
          Some fields were not filled
        </p>
      )}
    </div>
  );
};

export default NewsForm;

NewsForm.propTypes = {
  loading: PropTypes.bool,
  defaultValue: PropTypes.object,
  onSubmit: PropTypes.func,
};
