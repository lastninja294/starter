import React from 'react';

export const navigationComponentConfigs = [
  {
    path: '/components/navigation/affix',
    component: React.lazy(() => import('./Affix')),
  },
  {
    path: '/components/navigation/breadcrumb',
    component: React.lazy(() => import('./Breadcrumb')),
  },
  {
    path: '/components/navigation/dropdown',
    component: React.lazy(() => import('./Dropdown')),
  },
  {
    path: '/components/navigation/menu',
    component: React.lazy(() => import('./Menu')),
  },
  {
    path: '/components/navigation/pagination',
    component: React.lazy(() => import('./Pagination')),
  },
  {
    path: '/components/navigation/page-header',
    component: React.lazy(() => import('./PageHeader')),
  },
  {
    path: '/components/navigation/steps',
    component: React.lazy(() => import('./Steps')),
  },
];
