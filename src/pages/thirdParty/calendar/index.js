import React from 'react';

export const calendarConfigs = [
  {
    path: '/third-party/big-calendar/basic',
    component: React.lazy(() => import('./Basic')),
  },
  {
    path: '/third-party/big-calendar/cultures',
    component: React.lazy(() => import('./Cultures')),
  },
  {
    path: '/third-party/big-calendar/dnd',
    component: React.lazy(() => import('./Dnd')),
  },
  {
    path: '/third-party/big-calendar/popup',
    component: React.lazy(() => import('./Popup')),
  },
  {
    path: '/third-party/big-calendar/rendering',
    component: React.lazy(() => import('./Rendering')),
  },
  {
    path: '/third-party/big-calendar/selectable',
    component: React.lazy(() => import('./Selectable')),
  },
  {
    path: '/third-party/big-calendar/timeslots',
    component: React.lazy(() => import('./Timeslots')),
  },
];
