import React from 'react';
import {
  onUpdateMailFolders,
  onUpdateSelectedMail,
} from '../../../../../redux/actions/MailApp';
import {useDispatch, useSelector} from 'react-redux';
import IntlMessages from '../../../../../@crema/utility/IntlMessages';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Dropdown, Menu} from 'antd';
import {BiArchiveIn} from 'react-icons/bi';
import {BiArrowBack} from 'react-icons/bi';
import {HiOutlineMailOpen} from 'react-icons/hi';
import {FiMoreVertical} from 'react-icons/fi';
import {MdLabelOutline} from 'react-icons/md';
import {AiOutlineDelete, AiOutlineInfoCircle} from 'react-icons/ai';
import AppIconButton from '../../../../../@crema/core/AppIconButton';

const MailDetailHeader = (props) => {
  const {selectedMail} = props;
  const dispatch = useDispatch();

  const history = useHistory();

  const labelList = useSelector(({mailApp}) => mailApp.labelList);

  const onClickBackButton = () => {
    history.goBack();
  };

  const onSelectLabel = ({key}) => {
    const mail = selectedMail;
    const labelType = labelList.find(
      (label) => label.id.toString() === key.toString(),
    );
    mail.label = labelType;
    dispatch(onUpdateSelectedMail(mail));
  };

  const onChangeMailFolder = (type) => {
    dispatch(onUpdateMailFolders([selectedMail.id], type));
  };

  const onChangeReadStatus = () => {
    const mail = selectedMail;
    mail.isRead = false;
    dispatch(onUpdateSelectedMail(mail));
    history.goBack();
  };

  const onChangeStarredStatus = () => {
    const mail = selectedMail;
    mail.isStarred = !mail.isStarred;
    dispatch(onUpdateSelectedMail(mail));
  };

  const menuLabel = (
    <Menu onClick={onSelectLabel}>
      {labelList.map((label) => {
        return (
          <Menu.Item value={label.id} key={label.id}>
            {label.name}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const menuMoveTo = (
    <Menu>
      <Menu.Item onClick={onChangeReadStatus}>
        <IntlMessages id='mailApp.markAsUnread' />
      </Menu.Item>
      <Menu.Item onClick={onChangeStarredStatus}>
        {selectedMail.isStarred ? (
          <IntlMessages id='mailApp.markAsNotImportant' />
        ) : (
          <IntlMessages id='mailApp.markAsImportant' />
        )}
      </Menu.Item>
    </Menu>
  );

  if (!selectedMail) return null;
  return (
    <>
      <AppIconButton
        className='mail-detail-arrow'
        title={<IntlMessages id='common.back' />}
        icon={<BiArrowBack />}
        onClick={onClickBackButton}
      />
      <h5 className='mb-0 text-truncate'>
        {selectedMail.subject ? selectedMail.subject : null}
      </h5>
      <div className='mail-detail-header-action'>
        <AppIconButton
          title={<IntlMessages id='common.archive' />}
          icon={<BiArchiveIn />}
          onClick={() => onChangeMailFolder(127)}
        />

        <AppIconButton
          title={<IntlMessages id='common.reportSpam' />}
          icon={<AiOutlineInfoCircle />}
          onClick={() => onChangeMailFolder(125)}
        />

        <AppIconButton
          title={<IntlMessages id='common.trash' />}
          icon={<AiOutlineDelete />}
          onClick={() => onChangeMailFolder(126)}
        />

        <AppIconButton
          title={<IntlMessages id='mailApp.markAsUnread' />}
          icon={<HiOutlineMailOpen />}
          onClick={() => onChangeReadStatus()}
        />

        <Dropdown overlay={menuLabel} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.label' />}
            icon={<MdLabelOutline />}
          />
        </Dropdown>

        <Dropdown overlay={menuMoveTo} trigger={['click']}>
          <AppIconButton
            title={<IntlMessages id='common.more' />}
            icon={<FiMoreVertical />}
          />
        </Dropdown>
      </div>
    </>
  );
};

export default MailDetailHeader;

MailDetailHeader.propTypes = {
  selectedMail: PropTypes.object.isRequired,
};
