import React from 'react';
import {Dropdown, Input, Layout, Menu} from 'antd';
import './index.style.less';
import AppLogo from '../components/AppLogo';
import {useIntl} from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
// import AppHeaderMessages from '../../AppHeaderMessages';
// import AppNotifications from '../../AppNotifications';
import PropTypes from 'prop-types';
// import {FiMoreVertical} from 'react-icons/fi';
import {IoLanguageOutline} from 'react-icons/io5';
import {AiOutlineMenu} from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { searchPost } from 'redux/actions/News';

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  const dispatch =  useDispatch()
  const {Header} = Layout;
  const {Search} = Input;
  const {messages} = useIntl();
  const menuMobile = (
    <Menu className='mobileswitcher'>
      {/* <AppHeaderMessages />
      <AppNotifications /> */}

      <AppLanguageSwitcher />
      
    </Menu>
  );
  const onSearch = (e)=>{
    dispatch(searchPost(e.target.value))
  }
  return (
    <Header className='app-header'>
      <a className='trigger' onClick={() => onToggleSidebar(!isCollapsed)}>
        <AiOutlineMenu />
      </a>
      <AppLogo />
      <Search
        className='header-search'
        placeholder={messages['common.searchHere']}
        onChange={onSearch}
      />
      <div className='app-header-sectionDesktop'>
        <AppLanguageSwitcher />
        {/* <AppHeaderMessages /> */}
        {/* <AppNotifications /> */}
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
