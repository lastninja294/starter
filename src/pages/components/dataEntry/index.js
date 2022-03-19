import React from 'react';

export const dataEntryComponentConfigs = [
  {
    path: '/components/dataEntry/auto-complete',
    component: React.lazy(() => import('./AutoComplete')),
  },
  {
    path: '/components/dataEntry/checkbox',
    component: React.lazy(() => import('./Checkbox')),
  },
  {
    path: '/components/dataEntry/cascader',
    component: React.lazy(() => import('./Cascader')),
  },
  {
    path: '/components/dataEntry/form',
    component: React.lazy(() => import('./Form')),
  },
  {
    path: '/components/dataEntry/date-picker',
    component: React.lazy(() => import('./DatePicker')),
  },
  {
    path: '/components/dataEntry/inputnumber',
    component: React.lazy(() => import('./InputNumber')),
  },
  {
    path: '/components/dataEntry/input',
    component: React.lazy(() => import('./Input')),
  },
  {
    path: '/components/dataEntry/mention',
    component: React.lazy(() => import('./Mention')),
  },
  {
    path: '/components/dataEntry/rate',
    component: React.lazy(() => import('./Rate')),
  },
  {
    path: '/components/dataEntry/radio',
    component: React.lazy(() => import('./Radio')),
  },
  {
    path: '/components/dataEntry/select',
    component: React.lazy(() => import('./Select')),
  },
  {
    path: '/components/dataEntry/slider',
    component: React.lazy(() => import('./Slider')),
  },
  {
    path: '/components/dataEntry/switch',
    component: React.lazy(() => import('./Switches')),
  },
  {
    path: '/components/dataEntry/tree-select',
    component: React.lazy(() => import('./TreeSelect')),
  },
  {
    path: '/components/dataEntry/time-picker',
    component: React.lazy(() => import('./TimePicker')),
  },
  {
    path: '/components/dataEntry/transfer',
    component: React.lazy(() => import('./Transfer')),
  },
  {
    path: '/components/dataEntry/upload',
    component: React.lazy(() => import('./Upload')),
  },
];
