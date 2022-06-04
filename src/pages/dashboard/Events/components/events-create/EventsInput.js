import {Input} from 'antd';
import {Controller} from 'react-hook-form';

function EventsInput({
  control,
  placeholder,
  errors,
  allerrors,
  name,
  ...others
}) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=''
        render={({field}) => (
          <>
            <label
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '10px 0',
              }}>
              <span>title</span>
              <Input {...field} placeholder={placeholder} />
              {allerrors && (
                <p style={{fontSize: '12px', color: 'red'}}>
                  {errors?.message ||
                    "I Barcha maydonlar to'ldirilishi lozim !"}
                </p>
              )}
            </label>
          </>
        )}
        {...others}
      />
    </>
  );
}

export default EventsInput;
