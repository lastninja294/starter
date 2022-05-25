import React from 'react';
import {Dropdown, Input, Layout, Menu} from 'antd';
import './index.style.less';
import {FiMoreVertical} from 'react-icons/fi';
import AppLogo from '../components/AppLogo';
import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import UserInfo from '../components/UserInfo';

const AppHeader = () => {
  const {Header} = Layout;

  const menuMobile = (
    <Menu>
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-userMiniHeader'>
      <AppLogo />
      <div className='app-userMiniHeader-sectionDesktop'></div>
      <UserInfo />
      <div className='app-userMiniHeader-section-mobile'>
        <Dropdown overlay={menuMobile} trigger={['click']}>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            <FiMoreVertical />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;

AppHeader.propTypes = {};
