import React from 'react';
import {Dropdown, Input, Layout, Menu} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  const {Header} = Layout;

  const menuMobile = (
    <Menu>
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-standard-header'>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />

      <div className='app-standard-header-sectionDesktop'>
        <AppLanguageSwitcher />
      </div>
      <div className='app-standard-header-section-mobile'>
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

AppHeader.propTypes = {
  onToggleSidebar: PropTypes.func,
  isCollapsed: PropTypes.bool,
};
