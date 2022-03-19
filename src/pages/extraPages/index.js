import React from 'react';
import {RoutePermittedLevel} from '../../shared/constants/AppEnums';

export const extraPagesConfigs = [
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/user-profile',
    component: React.lazy(() => import('../profile/UserProfile')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/about-us',
    component: React.lazy(() => import('./AboutUs/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/contact-us',
    component: React.lazy(() => import('./ContactUs/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/knowledge-base',
    component: React.lazy(() => import('./KnowledgeBase/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/portfolio',
    component: React.lazy(() => import('./Portfolio/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/faq',
    component: React.lazy(() => import('./FAQ/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/extra-pages/pricing',
    component: React.lazy(() => import('./Pricing/index')),
  },
];
