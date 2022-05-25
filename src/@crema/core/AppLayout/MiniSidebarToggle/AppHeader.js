import React from 'react';
import {Dropdown, Input, Layout, Menu} from 'antd';
import './index.style.less';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import PropTypes from 'prop-types';
import AppLogo from '../components/AppLogo';
import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppHeaderMessages from '../../AppHeaderMessages';
import AppNotifications from '../../AppNotifications';
import {FiMoreVertical} from 'react-icons/fi';

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  const {Header} = Layout;

  const menuMobile = (
    <Menu>
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-header-mini-sidebar'>
      {React.createElement(
        isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
        {
          className: 'trigger',
          onClick: onToggleSidebar,
        },
      )}
      <AppLogo />
      <div className='app-header-mini-sidebar-sectionDesktop'>
        <AppLanguageSwitcher />
      </div>
      <div className='app-header-mini-sidebar-section-mobile'>
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
  isCollapsed: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
