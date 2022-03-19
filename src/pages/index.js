import {dashboardConfig} from './dashboard/index';
import {errorPagesConfigs} from './errorPages';
import {authRouteConfig} from './auth';
import {initialUrl} from '../shared/constants/AppConst';
import {ecommerceConfig} from './ecommerce/index';
import {extraPagesConfigs} from './extraPages';
import {thirdPartyConfigs} from './thirdParty';
import {userPagesConfig} from './userPages';
import {appsConfig} from './apps';
import {menuLevelConfig} from './menu';
import {userListConfig} from './userList';
import {componentsConfigs} from './components';
import {Redirect} from 'react-router-dom';
import Error403 from './errorPages/Error403';
import {profileConfig} from './profile';
import React from 'react';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashboardConfig,
    ...ecommerceConfig,
    ...extraPagesConfigs,
    ...componentsConfigs,
    ...thirdPartyConfigs,
    ...userPagesConfig,
    ...appsConfig,
    ...menuLevelConfig,
    ...userListConfig,
    ...profileConfig,
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '/',
      exact: true,
      component: () => <Redirect to={initialUrl} />,
    },
  ]),
};

export {authorizedStructure, unAuthorizedStructure, anonymousStructure};
