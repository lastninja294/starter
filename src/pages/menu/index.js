import React from 'react';
import {RoutePermittedLevel} from '../../shared/constants/AppEnums';

export const menuLevelConfig = [
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-1',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-2/level-2-1',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-2/level-2-2',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-3/level-3-1-1',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-3/level-3-1-2',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-3/level-3-2-1',
    component: React.lazy(() => import('./MenuLevel')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/menu-level/level-3/level-3-2-2',
    component: React.lazy(() => import('./MenuLevel')),
  },
];
