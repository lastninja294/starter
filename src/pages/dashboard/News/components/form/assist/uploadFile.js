import React from 'react'
import PropTypes from 'prop-types';
import { Controller} from 'react-hook-form';
import { Upload } from 'antd';

function UploadFile({defaultValue ,  control , error}) {
  // const [fileList, setFileList] = useState(defaultValue);
  // const handleChange = ({fileList}) =>{
  //   setFileList(fileList)
  // };
  // console.log(fileList);
  return (
    <div>
      <Controller
        name='file'
        control={control}
        render={({field}) => {
          return (
            <>
              <Upload.Dragger
                {...field}
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                listType='picture-card'
                multiple
                defaultFileList={defaultValue}
                rules={{required: true}}
                // fileList={fileList}
                // onChange={handleChange}
                accept={'image/* , video/*'}>
                Upload image
              </Upload.Dragger>
              {error && (
                <p style={{color: 'red', fontSize: '12px'}}>
                  * {error?.message || 'This field is required to be filled'}
                </p>
              )}
            </>
          );
        }}
      />
    </div>
  );
}

export default UploadFile

UploadFile.propTypes = {
  defaultValue: PropTypes.array,
  control: PropTypes.object,
  error: PropTypes.object
};