import React from 'react';

export const dataDisplayComponentConfigs = [
  {
    path: '/components/dataDisplay/avatar',
    component: React.lazy(() => import('./Avatar')),
  },
  {
    path: '/components/dataDisplay/badge',
    component: React.lazy(() => import('./Badge')),
  },
  {
    path: '/components/dataDisplay/collapse',
    component: React.lazy(() => import('./Collapse')),
  },
  {
    path: '/components/dataDisplay/calendar',
    component: React.lazy(() => import('./Calendar')),
  },
  {
    path: '/components/dataDisplay/card',
    component: React.lazy(() => import('./Cards')),
  },
  {
    path: '/components/dataDisplay/carousel',
    component: React.lazy(() => import('./Carousel')),
  },
  {
    path: '/components/dataDisplay/list',
    component: React.lazy(() => import('./List')),
  },
  {
    path: '/components/dataDisplay/popover',
    component: React.lazy(() => import('./Popover')),
  },
  {
    path: '/components/dataDisplay/tree',
    component: React.lazy(() => import('./Tree')),
  },
  {
    path: '/components/dataDisplay/tooltip',
    component: React.lazy(() => import('./Tooltip')),
  },
  {
    path: '/components/dataDisplay/timeline',
    component: React.lazy(() => import('./TimeLine')),
  },
  {
    path: '/components/dataDisplay/tag',
    component: React.lazy(() => import('./Tag')),
  },
  {
    path: '/components/dataDisplay/tabs',
    component: React.lazy(() => import('./Tabs')),
  },
  {
    path: '/components/dataDisplay/comment',
    component: React.lazy(() => import('./Comment')),
  },
  {
    path: '/components/dataDisplay/descriptions',
    component: React.lazy(() => import('./Descriptions')),
  },
  {
    path: '/components/dataDisplay/empty',
    component: React.lazy(() => import('./Empty')),
  },
  {
    path: '/components/dataDisplay/image',
    component: React.lazy(() => import('./Image')),
  },
  {
    path: '/components/dataDisplay/statistic',
    component: React.lazy(() => import('./Statistic')),
  },
];
