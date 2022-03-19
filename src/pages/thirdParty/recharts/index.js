import React from 'react';

export const rechartsConfigs = [
  {
    path: '/third-party/recharts/area',
    component: React.lazy(() => import('./Area')),
  },
  {
    path: '/third-party/recharts/bar',
    component: React.lazy(() => import('./Bar')),
  },
  {
    path: '/third-party/recharts/composed',
    component: React.lazy(() => import('./Composed')),
  },
  {
    path: '/third-party/recharts/line',
    component: React.lazy(() => import('./Line')),
  },
  {
    path: '/third-party/recharts/pie',
    component: React.lazy(() => import('./Pie')),
  },
  {
    path: '/third-party/recharts/radar',
    component: React.lazy(() => import('./Radar')),
  },
  {
    path: '/third-party/recharts/radial',
    component: React.lazy(() => import('./Radial')),
  },
  {
    path: '/third-party/recharts/treemap',
    component: React.lazy(() => import('./Treemap')),
  },
  {
    path: '/third-party/recharts/scatter',
    component: React.lazy(() => import('./Scatter')),
  },
  {
    path: '/third-party/recharts/funnel',
    component: React.lazy(() => import('./Funnel')),
  },
];
