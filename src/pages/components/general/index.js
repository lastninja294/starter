import React from 'react';

export const generalComponentConfigs = [
  {
    path: '/components/general/button',
    component: React.lazy(() => import('./Button')),
  },
  {
    path: '/components/general/typography',
    component: React.lazy(() => import('./Typography')),
  },
  {
    path: '/components/general/icon',
    component: React.lazy(() => import('./Icon')),
  },
];
