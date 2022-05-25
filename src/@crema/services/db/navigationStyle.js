import {
  LayoutType,
  MenuStyle,
  NavStyle,
  ThemeMode,
} from '../../../shared/constants/AppEnums';

export const navStyles = [
  {
    id: 1,
    alias: NavStyle.DEFAULT,
    image: '/assets/images/navigationStyle/default.svg',
  },

  {
    id: 2,
    alias: NavStyle.DRAWER,
    image: '/assets/images/navigationStyle/drawer.svg',
  },
  {
    id: 3,
    alias: NavStyle.MINI,
    image: '/assets/images/navigationStyle/mini.svg',
  },
];

export const menuStyles = [
  {
    id: 1,
    alias: MenuStyle.DEFAULT,
    image: '/assets/images/sidebar/menu/1.svg',
  },
  {
    id: 2,
    alias: MenuStyle.STANDARD,
    image: '/assets/images/sidebar/menu/2.svg',
  },
  {
    id: 3,
    alias: MenuStyle.ROUNDED,
    image: '/assets/images/sidebar/menu/3.svg',
  },
  {
    id: 4,
    alias: MenuStyle.ROUNDED_REVERSE,
    image: '/assets/images/sidebar/menu/4.svg',
  },
  {
    id: 5,
    alias: MenuStyle.CURVED_MENU,
    image: '/assets/images/sidebar/menu/5.svg',
  },
];

export const sidebarColors = [
  {
    id: 0,
    sidebarBgColor: '#313541',
    sidebarHeaderColor: '#313541',
    sidebarTextColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.DARK,
  },

  {
    id: 1,
    sidebarBgColor: '#fff',
    sidebarTextColor: 'rgba(0, 0, 0, 0.87)',
    sidebarHeaderColor: '#fff',
    sidebarMenuSelectedBgColor: '#F4F7FE',
    sidebarMenuSelectedTextColor: 'rgba(0, 0, 0, 0.87)',
    mode: ThemeMode.LIGHT,
  },
];

export const layoutTypes = [
  {
    id: 1,
    alias: LayoutType.FULL_WIDTH,
    image: '/assets/images/layouts/full-width.svg',
  },
  {
    id: 2,
    alias: LayoutType.BOXED,
    image: '/assets/images/layouts/boxed.svg',
  },
  {
    id: 3,
    alias: LayoutType.FRAMED,
    image: '/assets/images/layouts/framed.svg',
  },
];
