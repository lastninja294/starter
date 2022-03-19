import React from 'react';

export const userPagesConfig = [
  {
    path: '/extra-pages/user/sign-in-1',
    component: React.lazy(() => import('./UserPages/Signin')),
  },
  {
    path: '/extra-pages/user/sign-in-2',
    component: React.lazy(() => import('./StyledUserPages/Signin')),
  },
  {
    path: '/extra-pages/user/sign-up-1',
    component: React.lazy(() => import('./UserPages/Signup')),
  },
  {
    path: '/extra-pages/user/sign-up-2',
    component: React.lazy(() => import('./StyledUserPages/Signup')),
  },
  {
    path: '/extra-pages/user/forgot-password-1',
    component: React.lazy(() => import('./UserPages/ForgetPassword')),
  },
  {
    path: '/extra-pages/user/forgot-password-2',
    component: React.lazy(() => import('./StyledUserPages/ForgetPassword')),
  },
  {
    path: '/extra-pages/user/reset-password-1',
    component: React.lazy(() => import('./UserPages/ResetPassword')),
  },
  {
    path: '/extra-pages/user/reset-password-2',
    component: React.lazy(() => import('./StyledUserPages/ResetPassword')),
  },
  {
    path: '/extra-pages/user/lock-1',
    component: React.lazy(() => import('./UserPages/UnlockScreen')),
  },
  {
    path: '/extra-pages/user/lock-2',
    component: React.lazy(() => import('./StyledUserPages/UnlockScreen')),
  },
];
