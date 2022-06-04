import React from 'react';
import {Button} from 'antd';
import {useIntl} from 'react-intl';

const CreateButton = (props) => {
  const {messages} = useIntl();
  return <Button type='primary' {...props}>{messages['common.create']}</Button>;
};

export default CreateButton;
