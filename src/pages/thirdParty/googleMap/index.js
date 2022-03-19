import React from 'react';

export const mapConfigs = [
  {
    path: '/third-party/google-map/directions',
    component: React.lazy(() => import('./Directions')),
  },
  {
    path: '/third-party/google-map/drawing-view',
    component: React.lazy(() => import('./DrawingView')),
  },
  {
    path: '/third-party/google-map/event-handler',
    component: React.lazy(() => import('./EventHandler')),
  },
  {
    path: '/third-party/google-map/geolocation',
    component: React.lazy(() => import('./GeoLocation')),
  },
  {
    path: '/third-party/google-map/km-layer',
    component: React.lazy(() => import('./KmLayer')),
  },
  {
    path: '/third-party/google-map/map-clustering',
    component: React.lazy(() => import('./MapClustering')),
  },
  {
    path: '/third-party/google-map/map-overlay',
    component: React.lazy(() => import('./MapOverlay')),
  },
  {
    path: '/third-party/google-map/map-with-search-box',
    component: React.lazy(() => import('./MapWithSearchBox')),
  },
  {
    path: '/third-party/google-map/popup-info',
    component: React.lazy(() => import('./PopUpInfo')),
  },
  {
    path: '/third-party/google-map/simple',
    component: React.lazy(() => import('./Simple')),
  },
  {
    path: '/third-party/google-map/street-view',
    component: React.lazy(() => import('./StreetView')),
  },
  {
    path: '/third-party/google-map/styled',
    component: React.lazy(() => import('./Styled')),
  },
  {
    path: '/third-party/google-map/traffic-layer',
    component: React.lazy(() => import('./TrafficLayer')),
  },
];
