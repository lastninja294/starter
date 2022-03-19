import React from 'react';
import {RoutePermittedLevel} from '../../shared/constants/AppEnums';

export const dashboardConfig = [
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/dashboards/health-care',
    component: React.lazy(() => import('./HealthCare/index')),
  },
  {
    path: '/dashboards/e-commerce',
    component: React.lazy(() => import('./ECommerce/index')),
  },
  {
    path: '/dashboards/crm',
    component: React.lazy(() => import('./CRM/index')),
  },
  {
    path: '/dashboards/crypto',
    component: React.lazy(() => import('./Crypto/index')),
  },
  {
    path: '/dashboards/analytics',
    component: React.lazy(() => import('./Analytics/index')),
  },

  {
    path: '/dashboards/academy',
    component: React.lazy(() => import('./Academy/index')),
  },

  {
    path: '/dashboards/metrics',
    component: React.lazy(() => import('./Metrics/index')),
  },

  {
    path: '/dashboards/widgets',
    component: React.lazy(() => import('./Widgets/index')),
  },
];
