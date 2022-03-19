import React from 'react';
import {RoutePermittedLevel} from '../../shared/constants/AppEnums';

export const ecommerceConfig = [
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/invoice-1',
    component: React.lazy(() => import('./Invoice1/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/invoice-2',
    component: React.lazy(() => import('./Invoice2/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/products',
    component: React.lazy(() => import('./Products')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/product_detail/:id?',
    component: React.lazy(() => import('./ProductDetail')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/customers',
    component: React.lazy(() => import('./Customers')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/checkout',
    component: React.lazy(() => import('./Checkout')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/cart',
    component: React.lazy(() => import('./Carts/index')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/orders',
    component: React.lazy(() => import('./Orders')),
  },
  {
    permittedRole: RoutePermittedLevel.user,
    path: '/apps/ecommerce/confirmation',
    component: React.lazy(() => import('./Confirmation')),
  },
];
