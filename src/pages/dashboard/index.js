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
    path: '/dashboard/staff/create',
    component: React.lazy(() =>
      import('./Staff/crud/create/create-data.component'),
    ),
  },
  {
    path: '/dashboard/certificates',
    component: React.lazy(() => import('./Certificates')),
  },
  {
    path: '/dashboard/surgery',
    component: React.lazy(() => import('./Surgery')),
  },
];
