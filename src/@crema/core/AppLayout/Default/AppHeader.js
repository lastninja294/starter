import React from 'react';
import {Dropdown, Layout, Menu} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import PropTypes from 'prop-types';
import {IoLanguageOutline} from 'react-icons/io5';
import {AiOutlineMenu} from 'react-icons/ai';

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  const {Header} = Layout;
  const menuMobile = (
    <Menu className='mobileswitcher'>
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-header'>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />

      <div className='app-header-sectionDesktop'>
        <AppLanguageSwitcher />
      </div>
      <div className='app-header-section-mobile'>
        <Dropdown overlay={menuMobile} trigger={['click']}>
          <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
            <IoLanguageOutline />
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
