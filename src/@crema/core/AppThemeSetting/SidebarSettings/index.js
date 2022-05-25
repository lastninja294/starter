import React from 'react';
import {sidebarColors} from '../../../services/db/navigationStyle';
import NavMenuStyle from './NavMenuStyle';
import AppGrid from '../../AppGrid';
import MenuColorCell from './MenuColorCell';
import {useIntl} from 'react-intl';
import './index.style.less';

const SidebarSettings = () => {
  const {messages} = useIntl();
  return (
    <div className='sidebar-setting'>
      <NavMenuStyle />
      <div className='customize-item'>
        <h4>{messages['customizer.sidebarColors']}</h4>
        <AppGrid
          data={sidebarColors}
          column={2}
          itemPadding={5}
          renderItem={(colorSet, index) => (
            <MenuColorCell key={index} sidebarColors={colorSet} />
          )}
        />
      </div>
    </div>
  );
};

export default SidebarSettings;
