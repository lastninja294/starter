import React from 'react';
import {Dropdown, Layout, Menu} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import PropTypes from 'prop-types';
import {FiMoreVertical} from 'react-icons/fi';
import {AiOutlineMenu} from 'react-icons/ai';

const AppHeader = ({showDrawer}) => {
  const {Header} = Layout;
  const menuMobile = (
    <Menu>
      <AppLanguageSwitcher />
    </Menu>
  );

  return (
    <Header className='app-DrawerLayout-header'>
      <a className='trigger' onClick={showDrawer}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <div className='app-DrawerLayout-header-sectionDesktop'>
        <AppLanguageSwitcher />
      </div>
      <div className='app-DrawerLayout-header-section-mobile'>
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
  showDrawer: PropTypes.func,
};
