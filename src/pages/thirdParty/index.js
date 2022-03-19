import {mapConfigs} from './googleMap';
import {rechartsConfigs} from './recharts';
import React from 'react';
import {calendarConfigs} from './calendar';

export const thirdPartyConfigs = [
  ...mapConfigs,
  ...rechartsConfigs,
  {
    path: '/third-party/react-color',
    component: React.lazy(() => import('./reactColor')),
  },
  {
    path: '/third-party/react-notification',
    component: React.lazy(() => import('./reactNotification')),
  },
  {
    path: '/third-party/react-dropzone',
    component: React.lazy(() => import('./reactDropzone')),
  },
  {
    path: '/third-party/react-gallery',
    component: React.lazy(() => import('./reactPhotoGallery')),
  },
  {
    path: '/third-party/react-player',
    component: React.lazy(() => import('./reactPlayer')),
  },
  {
    path: '/third-party/react-dnd',
    component: React.lazy(() => import('./reactBeautifulDnd')),
  },
  {
    path: '/third-party/time-line',
    component: React.lazy(() => import('./timeLine')),
  },
  ...calendarConfigs,
];
