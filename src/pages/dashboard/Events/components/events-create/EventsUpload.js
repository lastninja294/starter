import {Upload, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {Controller} from 'react-hook-form';

import './EventsCreate.styles.scss';

const fileList = [
  {
    uid: '-1',
    name: 'qwe.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl:
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

function EventsUpload({control, errors, name, ...others}) {
  console.log(errors, 'errors');
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <>
            <label>files</label>
            <div className='events-upload'>
              <Upload
                {...field}
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                listType='picture'
                defaultFileList={[...fileList]}
                accept={'image/* , video/*'}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
            {errors && (
              <p style={{fontSize: '12px', color: 'red'}}>
                {errors?.message}
              </p>
            )}
          </>
        )}
        {...others}
      />
    </>
  );
}

export default EventsUpload;
