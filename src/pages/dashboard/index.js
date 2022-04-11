import React from 'react';

export const dashboardPagesConfigs = [
  {
    path: '/dashboard/settings',
    component: React.lazy(() => import('./Settings')),
  },
  {
    path: '/dashboard/news',
    component: React.lazy(() => import('./News')),
  },
  {
    path: '/dashboard/staff',
    component: React.lazy(() => import('./Staff')),
  },
  {
    path: '/dashboard/certificates',
    component: React.lazy(() => import('./Certificates')),
  },
  {
    path: '/dashboard/surgery',
    component: React.lazy(() => import('./Surgery')),
  },
  {
    path: '/dashboard/events',
    component: React.lazy(() => import('./Events')),
  },
];
