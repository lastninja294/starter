// import React from 'react';
// import {AiOutlineDatabase, AiOutlineLayout} from 'react-icons/ai';
// import {HiOutlineAcademicCap, HiOutlineChartSquareBar} from 'react-icons/hi';
// import {
  // RiBarChart2Line,
  // RiCustomerService2Line,
  // RiDashboardLine,
  // RiEqualizerLine,
  // RiShieldUserLine,
  // RiTodoLine,
// } from 'react-icons/ri';
// import // BiBookReader,
// BiCartAlt,
// BiData,
// BiDollar,
// BiErrorCircle,
// 'react-icons/bi';
// import {
  // MdDevicesOther,
  // MdInvertColors,
  // MdOutlineAnalytics,
  // MdOutlineContactPhone,
  // MdOutlineContactSupport,
  // MdOutlineDns,
  // MdOutlineManageAccounts,
  // MdTimeline,
// } from 'react-icons/md';
// import {VscFeedback} from 'react-icons/vsc';
// import {
  // BsBriefcase,
  // BsCart4,
  // BsChatDots,
  // BsCurrencyBitcoin,
  // BsQuestionDiamond,
  // BsTable,
// } from 'react-icons/bs';
// import {GiCloverSpiked} from 'react-icons/gi';
// import {FaRegCalendarAlt, FaRegHospital, FaRegImages} from 'react-icons/fa';
// import {FaRegCalendarAlt, FaRegImages} from 'react-icons/fa';
// import {CgFeed, CgUserList} from 'react-icons/cg';
// import {CgFeed} from 'react-icons/cg';
// import {CgAttachment, CgFeed, CgUserList} from 'react-icons/cg';
// import {TiMap} from 'react-icons/ti';
// import {FiUsers} from 'react-icons/fi'; //FiMail,
// import {FiMail, FiMap, FiUsers} from 'react-icons/fi';
// import {IoMdNotificationsOutline} from 'react-icons/io';
// import {DiHtml5Multimedia} from 'react-icons/di';
// import {RoutePermittedLevel} from '../shared/constants/AppEnums';

const routesConfig = [
  // {
  //   id: 'dashboards',
  //   title: 'Application',
  //   messageId: 'sidebar.application',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'crm',
  //       title: 'CRM',
  //       messageId: 'sidebar.app.dashboard.crm',
  //       icon: <RiCustomerService2Line />,
  //       path: '/dashboards/crm',
  //     },
  //     // {
  //     //   id: 'analytics',
  //     //   title: 'Analytics',
  //     //   messageId: 'sidebar.app.dashboard.analytics',
  //     //   icon: <MdOutlineAnalytics />,
  //     //   path: '/dashboards/analytics',
  //     // },
  //     // {
  //     //   id: 'health-care',
  //     //   title: 'Health Care',
  //     //   permittedRole: RoutePermittedLevel.user,
  //     //   messageId: 'sidebar.healthCare',
  //     //   icon: <FaRegHospital />,
  //     //   path: '/dashboards/health-care',
  //     // },
  //     {
  //       id: 'e-commerce',
  //       title: 'E-Commerce',
  //       messageId: 'sidebar.app.dashboard.eCommerce',
  //       icon: <BsCart4 />,
  //       path: '/dashboards/e-commerce',
  //     },
  //     {
  //       id: 'academy',
  //       title: 'Academy',
  //       messageId: 'sidebar.app.dashboard.academy',
  //       icon: <HiOutlineAcademicCap />,
  //       path: '/dashboards/academy',
  //     },
  //     {
  //       id: 'metrics',
  //       title: 'Metrics',
  //       messageId: 'sidebar.app.metrics',
  //       icon: <HiOutlineChartSquareBar />,
  //       path: '/dashboards/metrics',
  //     },
  //     {
  //       id: 'widgets',
  //       title: 'Widgets',
  //       messageId: 'sidebar.app.widgets',
  //       icon: <RiDashboardLine />,
  //       path: '/dashboards/widgets',
  //     },
  //   ],
  // },
  // {
  //   id: 'apps',
  //   title: 'Apps',
  //   messageId: 'sidebar.apps',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'mail',
  //       title: 'Mail',
  //       messageId: 'sidebar.apps.mail',
  //       count: 4,
  //       icon: <FiMail />,
  //       path: '/apps/mail/',
  //     },
  //     {
  //       id: 'todo',
  //       title: 'ToDo',
  //       messageId: 'sidebar.apps.todo',
  //       count: 6,
  //       icon: <RiTodoLine />,
  //       color: '#48bb78',
  //       path: '/apps/todo/',
  //     },
  //     {
  //       id: 'contact',
  //       title: 'Contact',
  //       messageId: 'sidebar.apps.contact',
  //       icon: <MdOutlineContactPhone />,
  //       path: '/apps/contact/',
  //     },
  //     {
  //       id: 'chat',
  //       title: 'Chat',
  //       icon: <BsChatDots />,
  //       messageId: 'sidebar.apps.chat',
  //       path: '/apps/chat/',
  //     },
  //     {
  //       id: 'scrum-board',
  //       title: 'Scrum Board',
  //       messageId: 'sidebar.apps.scrumboard',
  //       icon: <MdOutlineDns />,
  //       path: '/apps/scrum-board/',
  //     },
  //     {
  //       id: 'wall',
  //       title: 'Wall',
  //       messageId: 'sidebar.apps.wall',
  //       icon: <CgFeed />,
  //       path: '/apps/wall',
  //     },
  //     // {
  //     //   id: 'ecommerce',
  //     //   title: 'Ecommerce',
  //     //   messageId: 'sidebar.ecommerce',
  //     //   icon: <BiCartAlt />,
  //     //   type: 'collapse',
  //     //   children: [
  //     //     {
  //     //       id: 'products',
  //     //       title: 'Products',
  //     //       messageId: 'sidebar.ecommerce.products',
  //     //       path: '/apps/ecommerce/products',
  //     //     },
  //     //     {
  //     //       id: 'product_detail',
  //     //       title: 'Product Detail',
  //     //       messageId: 'sidebar.ecommerce.productDetail',
  //     //       path: '/apps/ecommerce/product_detail',
  //     //     },
  //     //     {
  //     //       id: 'orders',
  //     //       title: 'Orders',
  //     //       messageId: 'sidebar.ecommerce.orders',
  //     //       path: '/apps/ecommerce/orders',
  //     //     },
  //     //     {
  //     //       id: 'customers',
  //     //       title: 'Customers',
  //     //       messageId: 'sidebar.ecommerce.customers',
  //     //       path: '/apps/ecommerce/customers',
  //     //     },
  //     //     {
  //     //       id: 'cart',
  //     //       title: 'Cart',
  //     //       messageId: 'sidebar.ecommerce.cart',
  //     //       path: '/apps/ecommerce/cart',
  //     //     },
  //     //     {
  //     //       id: 'checkout',
  //     //       title: 'Checkout',
  //     //       messageId: 'sidebar.ecommerce.checkout',
  //     //       path: '/apps/ecommerce/checkout',
  //     //     },
  //     //     {
  //     //       id: 'confirmation',
  //     //       title: 'Confirmation',
  //     //       messageId: 'sidebar.ecommerce.confirmation',
  //     //       path: '/apps/ecommerce/confirmation',
  //     //     },
  //     //     {
  //     //       id: 'invoice-1',
  //     //       title: 'Invoice 1',
  //     //       messageId: 'sidebar.ecommerce.invoice1',
  //     //       path: '/apps/ecommerce/invoice-1',
  //     //     },
  //     //     {
  //     //       id: 'invoice-2',
  //     //       title: 'Invoice 2',
  //     //       messageId: 'sidebar.ecommerce.invoice2',
  //     //       path: '/apps/ecommerce/invoice-2',
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
  // {
  //   id: 'third-party',
  //   title: 'Libs',
  //   messageId: 'sidebar.libs',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'google-map',
  //       title: 'Google Map',
  //       messageId: 'sidebar.googleMap',
  //       icon: <FiMap />,
  //       path: 'google-map',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'simple',
  //           title: 'Simple',
  //           messageId: 'sidebar.googleMap.simple',
  //           path: '/third-party/google-map/simple',
  //         },
  //         {
  //           id: 'directions',
  //           title: 'Directions',
  //           messageId: 'sidebar.googleMap.directions',
  //           path: '/third-party/google-map/directions',
  //         },
  //         {
  //           id: 'drawing-view',
  //           title: 'DrawingView',
  //           messageId: 'sidebar.googleMap.drawingView',
  //           path: '/third-party/google-map/drawing-view',
  //         },
  //         {
  //           id: 'event-handler',
  //           title: 'Event Handler',
  //           messageId: 'sidebar.googleMap.eventHandler',
  //           path: '/third-party/google-map/event-handler',
  //         },
  //         {
  //           id: 'geolocation',
  //           title: 'GeoLocation',
  //           messageId: 'sidebar.googleMap.geoLocation',
  //           path: '/third-party/google-map/geolocation',
  //         },
  //         {
  //           id: 'km-layer',
  //           title: 'KmLayer',
  //           messageId: 'sidebar.googleMap.kmLayer',
  //           path: '/third-party/google-map/km-layer',
  //         },
  //         {
  //           id: 'map-clustering',
  //           title: 'MapClustering',
  //           messageId: 'sidebar.googleMap.mapClustering',
  //           path: '/third-party/google-map/map-clustering',
  //         },
  //         {
  //           id: 'map-overlay',
  //           title: 'MapOverlay',
  //           messageId: 'sidebar.googleMap.mapOverlay',
  //           path: '/third-party/google-map/map-overlay',
  //         },
  //         /*{
  //           id: 'map-with-search-box',
  //           title: 'MapWithSearchBox',
  //           messageId: 'sidebar.googleMap.mapWithSearchBox',
  //           path: '/google-map/map-with-search-box',
  //         },*/
  //         {
  //           id: 'popup-info',
  //           title: 'PopUpInfo',
  //           messageId: 'sidebar.googleMap.popUpInfo',
  //           path: '/third-party/google-map/popup-info',
  //         },
  //         {
  //           id: 'street-view',
  //           title: 'StreetView',
  //           messageId: 'sidebar.googleMap.streetView',
  //           path: '/third-party/google-map/street-view',
  //         },
  //         {
  //           id: 'styled',
  //           title: 'Styled',
  //           messageId: 'sidebar.googleMap.styled',
  //           path: '/third-party/google-map/styled',
  //         },
  //         {
  //           id: 'traffic-layer',
  //           title: 'TrafficLayer',
  //           messageId: 'sidebar.googleMap.trafficLayer',
  //           path: '/third-party/google-map/traffic-layer',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'recharts',
  //       title: 'Recharts',
  //       messageId: 'sidebar.recharts',
  //       icon: <RiBarChart2Line />,
  //       path: 'recharts',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'area',
  //           title: 'Area Chart',
  //           messageId: 'sidebar.recharts.areaChart',
  //           path: '/third-party/recharts/area',
  //         },
  //         {
  //           id: 'bar',
  //           title: 'Bar Chart',
  //           messageId: 'sidebar.recharts.barChart',
  //           path: '/third-party/recharts/bar',
  //         },
  //         {
  //           id: 'composed',
  //           title: 'Composed Chart',
  //           messageId: 'sidebar.recharts.composedChart',
  //           path: '/third-party/recharts/composed',
  //         },
  //         {
  //           id: 'line',
  //           title: 'Line Chart',
  //           messageId: 'sidebar.recharts.lineChart',
  //           path: '/third-party/recharts/line',
  //         },
  //         {
  //           id: 'pie',
  //           title: 'Pie Chart',
  //           messageId: 'sidebar.recharts.pieChart',
  //           path: '/third-party/recharts/pie',
  //         },
  //         {
  //           id: 'radar',
  //           title: 'Radar Chart',
  //           messageId: 'sidebar.recharts.radarChart',
  //           path: '/third-party/recharts/radar',
  //         },
  //         {
  //           id: 'radial',
  //           title: 'Radial Chart',
  //           messageId: 'sidebar.recharts.radialChart',
  //           path: '/third-party/recharts/radial',
  //         },
  //         {
  //           id: 'scatter',
  //           title: 'Scatter Chart',
  //           messageId: 'sidebar.recharts.scatterChart',
  //           path: '/third-party/recharts/scatter',
  //         },
  //         {
  //           id: 'funnel',
  //           title: 'Funnel Chart',
  //           messageId: 'sidebar.recharts.funnelChart',
  //           path: '/third-party/recharts/funnel',
  //         },
  //         {
  //           id: 'treemap',
  //           title: 'Treemap Chart',
  //           messageId: 'sidebar.recharts.treeChart',
  //           path: '/third-party/recharts/treemap',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'big-calendar',
  //       title: 'Big Calendar',
  //       messageId: 'sidebar.bigCalender',
  //       icon: <FaRegCalendarAlt />,
  //       path: 'big-calendar',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'basic',
  //           title: 'Basic',
  //           messageId: 'sidebar.bigCalender.basic',
  //           path: '/third-party/big-calendar/basic',
  //         },
  //         {
  //           id: 'cultures',
  //           title: 'Cultures',
  //           messageId: 'sidebar.bigCalender.cultures',
  //           path: '/third-party/big-calendar/cultures',
  //         },
  //         {
  //           id: 'dnd',
  //           title: 'Dnd',
  //           messageId: 'sidebar.bigCalender.dnd',
  //           path: '/third-party/big-calendar/dnd',
  //         },
  //         {
  //           id: 'popup',
  //           title: 'Popup',
  //           messageId: 'sidebar.bigCalender.popup',
  //           path: '/third-party/big-calendar/popup',
  //         },
  //         {
  //           id: 'rendering',
  //           title: 'Rendering',
  //           messageId: 'sidebar.bigCalender.rendering',
  //           path: '/third-party/big-calendar/rendering',
  //         },
  //         {
  //           id: 'selectable',
  //           title: 'Selectable',
  //           messageId: 'sidebar.bigCalender.selectable',
  //           path: '/third-party/big-calendar/selectable',
  //         },
  //         {
  //           id: 'timeslots',
  //           title: 'Timeslots',
  //           messageId: 'sidebar.bigCalender.timeSlots',
  //           path: '/third-party/big-calendar/timeslots',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'react-color',
  //       title: 'React Color',
  //       messageId: 'sidebar.reactColor',
  //       icon: <MdInvertColors />,
  //       path: '/third-party/react-color',
  //     },
  //     {
  //       id: 'react-dropzone',
  //       title: 'React Dropzone',
  //       messageId: 'sidebar.reactDropzone',
  //       icon: <CgAttachment />,
  //       path: '/third-party/react-dropzone',
  //     },
  //     {
  //       id: 'react-notification',
  //       title: 'React Notification',
  //       messageId: 'sidebar.reactNotification',
  //       icon: <IoMdNotificationsOutline />,
  //       path: '/third-party/react-notification',
  //     },
  //     {
  //       id: 'react-gallery',
  //       title: 'Gallery',
  //       messageId: 'sidebar.gallery',
  //       icon: <FaRegImages />,
  //       path: '/third-party/react-gallery',
  //     },
  //     {
  //       id: 'react-dnd',
  //       title: 'React DND',
  //       messageId: 'sidebar.reactDnd',
  //       icon: <GiCloverSpiked />,
  //       path: '/third-party/react-dnd',
  //     },
  //     {
  //       id: 'react-player',
  //       title: 'Player',
  //       messageId: 'sidebar.player',
  //       icon: <DiHtml5Multimedia />,
  //       path: '/third-party/react-player',
  //     },
  //     {
  //       id: 'time-line',
  //       title: 'Time Line',
  //       messageId: 'sidebar.pages.timeLine',
  //       icon: <MdTimeline />,
  //       path: '/third-party/time-line',
  //     },
  //   ],
  // },
  // {
  //   id: 'components',
  //   title: 'Components',
  //   messageId: 'sidebar.components',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'general',
  //       title: 'General',
  //       messageId: 'sidebar.components.general',
  //       icon: <TiMap />,
  //       path: 'general',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           messageId: 'sidebar.general.button',
  //           path: '/components/general/button',
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           messageId: 'sidebar.general.typography',
  //           path: '/components/general/typography',
  //         },
  //         {
  //           id: 'icon',
  //           title: 'Icon',
  //           messageId: 'sidebar.general.icon',
  //           path: '/components/general/icon',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'navigation',
  //       title: 'Navigation',
  //       messageId: 'sidebar.components.navigation',
  //       icon: <RiEqualizerLine />,
  //       path: 'navigation',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'affix',
  //           title: 'Affix',
  //           messageId: 'sidebar.navigation.affix',
  //           path: '/components/navigation/affix',
  //         },
  //         {
  //           id: 'breadcrumb',
  //           title: 'Breadcrumb',
  //           messageId: 'sidebar.navigation.breadcrumb',
  //           path: '/components/navigation/breadcrumb',
  //         },
  //         {
  //           id: 'dropdown',
  //           title: 'Dropdown',
  //           messageId: 'sidebar.navigation.dropdown',
  //           path: '/components/navigation/dropdown',
  //         },
  //         {
  //           id: 'menu',
  //           title: 'Menu',
  //           messageId: 'sidebar.navigation.menu',
  //           path: '/components/navigation/menu',
  //         },
  //         {
  //           id: 'page-header',
  //           title: 'PageHeader',
  //           messageId: 'sidebar.navigation.pageHeader',
  //           path: '/components/navigation/page-header',
  //         },
  //         {
  //           id: 'pagination',
  //           title: 'Pagination',
  //           messageId: 'sidebar.navigation.pagination',
  //           path: '/components/navigation/pagination',
  //         },
  //         {
  //           id: 'steps',
  //           title: 'Steps',
  //           messageId: 'sidebar.navigation.steps',
  //           path: '/components/navigation/steps',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'dataEntry',
  //       title: 'Data Entry',
  //       messageId: 'sidebar.components.dataEntry',
  //       icon: <AiOutlineDatabase />,
  //       path: 'dataEntry',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'auto-complete',
  //           title: 'AutoComplete',
  //           messageId: 'sidebar.dataEntry.autoComplete',
  //           path: '/components/dataEntry/auto-complete',
  //         },
  //         {
  //           id: 'checkbox',
  //           title: 'Checkbox',
  //           messageId: 'sidebar.dataEntry.checkbox',
  //           path: '/components/dataEntry/checkbox',
  //         },
  //         {
  //           id: 'cascader',
  //           title: 'Cascader',
  //           messageId: 'sidebar.dataEntry.cascader',
  //           path: '/components/dataEntry/cascader',
  //         },
  //         {
  //           id: 'date-picker',
  //           title: 'Datepicker',
  //           messageId: 'sidebar.dataEntry.datePicker',
  //           path: '/components/dataEntry/date-picker',
  //         },
  //         {
  //           id: 'form',
  //           title: 'Form',
  //           messageId: 'sidebar.dataEntry.form',
  //           path: '/components/dataEntry/form',
  //         },
  //         {
  //           id: 'inputNumber',
  //           title: 'InputNumber',
  //           messageId: 'sidebar.dataEntry.inputNumber',
  //           path: '/components/dataEntry/inputNumber',
  //         },
  //         {
  //           id: 'input',
  //           title: 'Input',
  //           messageId: 'sidebar.dataEntry.input',
  //           path: '/components/dataEntry/input',
  //         },
  //         {
  //           id: 'mention',
  //           title: 'Mention',
  //           messageId: 'sidebar.dataEntry.mention',
  //           path: '/components/dataEntry/mention',
  //         },
  //         {
  //           id: 'rate',
  //           title: 'Rate',
  //           messageId: 'sidebar.dataEntry.rate',
  //           path: '/components/dataEntry/rate',
  //         },
  //         {
  //           id: 'radio',
  //           title: 'Radio',
  //           messageId: 'sidebar.dataEntry.radio',
  //           path: '/components/dataEntry/radio',
  //         },
  //         {
  //           id: 'switch',
  //           title: 'Switch',
  //           messageId: 'sidebar.dataEntry.switch',
  //           path: '/components/dataEntry/switch',
  //         },
  //         {
  //           id: 'slider',
  //           title: 'Slider',
  //           messageId: 'sidebar.dataEntry.slider',
  //           path: '/components/dataEntry/slider',
  //         },
  //         {
  //           id: 'select',
  //           title: 'Select',
  //           messageId: 'sidebar.dataEntry.select',
  //           path: '/components/dataEntry/select',
  //         },
  //         {
  //           id: 'tree-select',
  //           title: 'TreeSelect',
  //           messageId: 'sidebar.dataEntry.treeSelect',
  //           path: '/components/dataEntry/tree-select',
  //         },
  //         {
  //           id: 'transfer',
  //           title: 'Transfer',
  //           messageId: 'sidebar.dataEntry.transfer',
  //           path: '/components/dataEntry/transfer',
  //         },
  //         {
  //           id: 'time-picker',
  //           title: 'Time Picker',
  //           messageId: 'sidebar.dataEntry.timePicker',
  //           path: '/components/dataEntry/time-picker',
  //         },
  //         {
  //           id: 'upload',
  //           title: 'Upload',
  //           messageId: 'sidebar.dataEntry.upload',
  //           path: '/components/dataEntry/upload',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'dataDisplay',
  //       title: 'Data Display',
  //       messageId: 'sidebar.components.dataDisplay',
  //       icon: <BiData />,
  //       path: 'dataDisplay',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'avatar',
  //           title: 'Avatar',
  //           messageId: 'sidebar.dataDisplay.avatar',
  //           path: '/components/dataDisplay/avatar',
  //         },
  //         {
  //           id: 'badge',
  //           title: 'Badge',
  //           messageId: 'sidebar.dataDisplay.badge',
  //           path: '/components/dataDisplay/badge',
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           messageId: 'sidebar.dataDisplay.collapse',
  //           path: '/components/dataDisplay/collapse',
  //         },
  //         {
  //           id: 'carousel',
  //           title: 'Carousel',
  //           messageId: 'sidebar.dataDisplay.carousel',
  //           path: '/components/dataDisplay/carousel',
  //         },
  //         {
  //           id: 'card',
  //           title: 'Card',
  //           messageId: 'sidebar.dataDisplay.card',
  //           path: '/components/dataDisplay/card',
  //         },
  //         {
  //           id: 'calendar',
  //           title: 'Calendar',
  //           messageId: 'sidebar.dataDisplay.calender',
  //           path: '/components/dataDisplay/calendar',
  //         },
  //         {
  //           id: 'list',
  //           title: 'List',
  //           messageId: 'sidebar.dataDisplay.list',
  //           path: '/components/dataDisplay/list',
  //         },
  //         {
  //           id: 'popover',
  //           title: 'Popover',
  //           messageId: 'sidebar.dataDisplay.popover',
  //           path: '/components/dataDisplay/popover',
  //         },
  //         {
  //           id: 'tree',
  //           title: 'Tree',
  //           messageId: 'sidebar.dataDisplay.tree',
  //           path: '/components/dataDisplay/tree',
  //         },
  //         {
  //           id: 'tooltip',
  //           title: 'Tooltips',
  //           messageId: 'sidebar.dataDisplay.toolTips',
  //           path: '/components/dataDisplay/tooltip',
  //         },
  //         {
  //           id: 'timeline',
  //           title: 'Timeline',
  //           messageId: 'sidebar.dataDisplay.timeLine',
  //           path: '/components/dataDisplay/timeline',
  //         },
  //         {
  //           id: 'tag',
  //           title: 'Tag',
  //           messageId: 'sidebar.dataDisplay.tag',
  //           path: '/components/dataDisplay/tag',
  //         },
  //         {
  //           id: 'tabs',
  //           title: 'Tabs',
  //           messageId: 'sidebar.dataDisplay.tabs',
  //           path: '/components/dataDisplay/tabs',
  //         },
  //         {
  //           id: 'comment',
  //           title: 'Comment',
  //           messageId: 'sidebar.dataDisplay.comment',
  //           path: '/components/dataDisplay/comment',
  //         },
  //         {
  //           id: 'descriptions',
  //           title: 'Descriptions',
  //           messageId: 'sidebar.dataDisplay.descriptions',
  //           path: '/components/dataDisplay/descriptions',
  //         },
  //         {
  //           id: 'empty',
  //           title: 'Empty',
  //           messageId: 'sidebar.dataDisplay.empty',
  //           path: '/components/dataDisplay/empty',
  //         },
  //         {
  //           id: 'image',
  //           title: 'Image',
  //           messageId: 'sidebar.dataDisplay.image',
  //           path: '/components/dataDisplay/image',
  //         },
  //         {
  //           id: 'statistic',
  //           title: 'Statistic',
  //           messageId: 'sidebar.dataDisplay.statistic',
  //           path: '/components/dataDisplay/statistic',
  //         },
  //       ],
  //     },

  //     {
  //       id: 'feedBack',
  //       title: 'FeedBack',
  //       messageId: 'sidebar.components.feedBack',
  //       icon: <VscFeedback />,
  //       path: 'feedBack',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'alert',
  //           title: 'Alert',
  //           messageId: 'sidebar.feedBack.alert',
  //           path: '/components/feedBack/alert',
  //         },
  //         {
  //           id: 'modal',
  //           title: 'Modal',
  //           messageId: 'sidebar.feedBack.modal',
  //           path: '/components/feedBack/modal',
  //         },
  //         {
  //           id: 'message',
  //           title: 'Message',
  //           messageId: 'sidebar.feedBack.message',
  //           path: '/components/feedBack/message',
  //         },
  //         {
  //           id: 'notification',
  //           title: 'Notification',
  //           messageId: 'sidebar.feedBack.notification',
  //           path: '/components/feedBack/notification',
  //         },
  //         {
  //           id: 'progress',
  //           title: 'Progress',
  //           messageId: 'sidebar.feedBack.progress',
  //           path: '/components/feedBack/progress',
  //         },
  //         {
  //           id: 'pop-confirm',
  //           title: 'PopConfirm',
  //           messageId: 'sidebar.feedBack.popConfirm',
  //           path: '/components/feedBack/pop-confirm',
  //         },
  //         {
  //           id: 'spin',
  //           title: 'Spin',
  //           messageId: 'sidebar.feedBack.spin',
  //           path: '/components/feedBack/spin',
  //         },
  //         {
  //           id: 'drawer',
  //           title: 'Drawer',
  //           messageId: 'sidebar.feedBack.drawer',
  //           path: '/components/feedBack/drawer',
  //         },
  //         {
  //           id: 'result',
  //           title: 'Result',
  //           messageId: 'sidebar.feedBack.result',
  //           path: '/components/feedBack/result',
  //         },
  //         {
  //           id: 'skeleton',
  //           title: 'Skeleton',
  //           messageId: 'sidebar.feedBack.skeleton',
  //           path: '/components/feedBack/skeleton',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'other',
  //       title: 'Other',
  //       messageId: 'sidebar.components.other',
  //       icon: <MdDevicesOther />,
  //       path: 'other',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'anchor',
  //           title: 'Anchor',
  //           messageId: 'sidebar.other.anchor',
  //           path: '/components/other/anchor',
  //         },
  //         {
  //           id: 'backTop',
  //           title: 'BackTop',
  //           messageId: 'sidebar.other.backTop',
  //           path: '/components/other/backTop',
  //         },
  //         {
  //           id: 'divider',
  //           title: 'Divider',
  //           messageId: 'sidebar.other.divider',
  //           path: '/components/other/divider',
  //         },
  //         {
  //           id: 'config-provider',
  //           title: 'ConfigProvider',
  //           messageId: 'sidebar.other.configProvider',
  //           path: '/components/other/config-provider',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'layout',
  //       title: 'Layout',
  //       messageId: 'sidebar.components.layout',
  //       icon: <AiOutlineLayout />,
  //       path: 'layout',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'divider',
  //           title: 'Divider',
  //           messageId: 'sidebar.layout.divider',
  //           path: '/components/layout/divider',
  //         },
  //         {
  //           id: 'space',
  //           title: 'Space',
  //           messageId: 'sidebar.layout.space',
  //           path: '/components/layout/space',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'table',
  //       title: 'Table',
  //       messageId: 'sidebar.dataDisplay.table',
  //       icon: <BsTable />,
  //       path: 'table',
  //       type: 'collapse',
  //       children: [
  //         {
  //           id: 'basic-table',
  //           title: 'Basic',
  //           messageId: 'sidebar.bigCalender.basic',
  //           path: '/components/table/basic-table',
  //         },
  //         {
  //           id: 'data',
  //           title: 'Data',
  //           messageId: 'sidebar.table.data',
  //           path: '/components/table/data',
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 'extra-pages',
  //   title: 'Extra Pages',
  //   messageId: 'sidebar.pages.extraPages',
  //   path: 'extra-pages',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'account',
  //       title: 'Account',
  //       messageId: 'sidebar.pages.extraPages.account',
  //       icon: <MdOutlineManageAccounts />,
  //       path: '/extra-pages/user-profile',
  //     },
  //     {
  //       id: 'about-us',
  //       title: 'About Us',
  //       messageId: 'sidebar.pages.extraPages.aboutUs',
  //       icon: <FiUsers />,
  //       path: '/extra-pages/about-us',
  //     },
  //     {
  //       id: 'contact-us',
  //       title: 'Contact Us',
  //       messageId: 'sidebar.pages.extraPages.contactUs',
  //       icon: <MdOutlineContactSupport />,
  //       path: '/extra-pages/contact-us',
  //     },
  //     // {
  //     //   id: 'knowledge-base',
  //     //   title: 'Knowledge Base',
  //     //   messageId: 'sidebar.pages.extraPages.knowledgeBase',
  //     //   icon: <BiBookReader />,
  //     //   path: '/extra-pages/knowledge-base',
  //     // },
  //     // {
  //     //   id: 'portfolio',
  //     //   title: 'Portfolio',
  //     //   messageId: 'sidebar.pages.extraPages.portfolio',
  //     //   icon: <BsBriefcase />,
  //     //   path: '/extra-pages/portfolio',
  //     // },
  //     // {
  //     //   id: 'faq',
  //     //   title: 'FAQ',
  //     //   messageId: 'sidebar.pages.extraPages.faq',
  //     //   icon: <BsQuestionDiamond />,
  //     //   path: '/extra-pages/faq',
  //     // },
  //     // {
  //     //   id: 'pricing',
  //     //   title: 'Pricing',
  //     //   messageId: 'sidebar.pages.extraPages.pricing',
  //     //   icon: <BiDollar />,
  //     //   path: '/extra-pages/pricing',
  //     // },
  //     // {
  //     //   id: 'user',
  //     //   title: 'user Pages',
  //     //   messageId: 'sidebar.pages.userPages',
  //     //   icon: <RiShieldUserLine />,
  //     //   path: 'user',
  //     //   type: 'collapse',
  //     //   children: [
  //     //     {
  //     //       id: 'sign-in-1',
  //     //       title: 'SignIn-1',
  //     //       messageId: 'sidebar.pages.userPages.signIn1',
  //     //       path: '/extra-pages/user/sign-in-1',
  //     //     },
  //     //     {
  //     //       id: 'sign-in-2',
  //     //       title: 'SignIn-2',
  //     //       messageId: 'sidebar.pages.userPages.signIn2',
  //     //       path: '/extra-pages/user/sign-in-2',
  //     //     },
  //     //     {
  //     //       id: 'sign-up-1',
  //     //       title: 'SignUp-1',
  //     //       messageId: 'sidebar.pages.userPages.signUp1',
  //     //       path: '/extra-pages/user/sign-up-1',
  //     //     },
  //     //     {
  //     //       id: 'sign-up-2',
  //     //       title: 'SignUp-2',
  //     //       messageId: 'sidebar.pages.userPages.signUp2',
  //     //       path: '/extra-pages/user/sign-up-2',
  //     //     },
  //     //     {
  //     //       id: 'forgot-password-1',
  //     //       title: 'Forgot Password-1',
  //     //       messageId: 'sidebar.pages.userPages.forgetPassword1',
  //     //       path: '/extra-pages/user/forgot-password-1',
  //     //     },
  //     //     {
  //     //       id: 'forgot-password-2',
  //     //       title: 'Forgot Password-2',
  //     //       messageId: 'sidebar.pages.userPages.forgetPassword2',
  //     //       path: '/extra-pages/user/forgot-password-2',
  //     //     },
  //     //     {
  //     //       id: 'reset-password-1',
  //     //       title: 'Reset Password-1',
  //     //       messageId: 'sidebar.pages.userPages.resetPassword1',
  //     //       path: '/extra-pages/user/reset-password-1',
  //     //     },
  //     //     {
  //     //       id: 'reset-password-2',
  //     //       title: 'Reset Password-2',
  //     //       messageId: 'sidebar.pages.userPages.resetPassword2',
  //     //       path: '/extra-pages/user/reset-password-2',
  //     //     },
  //     //     {
  //     //       id: 'lock-1',
  //     //       title: 'Lock Screen-1',
  //     //       messageId: 'sidebar.pages.userPages.lockScreen1',
  //     //       path: '/extra-pages/user/lock-1',
  //     //     },
  //     //     {
  //     //       id: 'lock-2',
  //     //       title: 'Lock Screen-2',
  //     //       messageId: 'sidebar.pages.userPages.lockScreen2',
  //     //       path: '/extra-pages/user/lock-2',
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   id: 'list-type',
  //     //   title: 'user List',
  //     //   messageId: 'sidebar.pages.userList',
  //     //   icon: <CgUserList />,
  //     //   path: 'list-type',
  //     //   type: 'collapse',
  //     //   children: [
  //     //     {
  //     //       id: 'morden',
  //     //       title: 'Modern',
  //     //       messageId: 'sidebar.pages.userList.modern',
  //     //       path: '/extra-pages/list-type/morden',
  //     //     },
  //     //     {
  //     //       id: 'standard',
  //     //       title: 'Standard',
  //     //       messageId: 'sidebar.pages.userList.standard',
  //     //       path: '/extra-pages/list-type/standard',
  //     //     },
  //     //     {
  //     //       id: 'flat',
  //     //       title: 'Flat',
  //     //       messageId: 'sidebar.pages.userList.flat',
  //     //       path: '/extra-pages/list-type/flat',
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   id: 'error-pages',
  //     //   title: 'Error Pages',
  //     //   messageId: 'sidebar.pages.errorPages',
  //     //   icon: <BiErrorCircle />,
  //     //   path: 'error-pages',
  //     //   type: 'collapse',
  //     //   children: [
  //     //     {
  //     //       id: 'error-401',
  //     //       title: '401',
  //     //       messageId: 'sidebar.pages.errorPages.401',
  //     //       path: '/extra-pages/error-pages/error-401',
  //     //     },
  //     //     {
  //     //       id: 'error-403',
  //     //       title: '403',
  //     //       messageId: 'sidebar.pages.errorPages.403',
  //     //       path: '/extra-pages/error-pages/error-403',
  //     //     },
  //     //     {
  //     //       id: 'error-404',
  //     //       title: '404',
  //     //       messageId: 'sidebar.pages.errorPages.404',
  //     //       path: '/extra-pages/error-pages/error-404',
  //     //     },
  //     //     {
  //     //       id: 'error-500',
  //     //       title: '500',
  //     //       messageId: 'sidebar.pages.errorPages.500',
  //     //       path: '/extra-pages/error-pages/error-500',
  //     //     },
  //     //     {
  //     //       id: 'maintenance',
  //     //       title: 'Maintenance',
  //     //       messageId: 'sidebar.pages.errorPages.maintenance',
  //     //       path: '/extra-pages/error-pages/maintenance',
  //     //     },
  //     //     {
  //     //       id: 'coming-soon',
  //     //       title: 'Coming Soon',
  //     //       messageId: 'sidebar.pages.errorPages.comingSoon',
  //     //       path: '/extra-pages/error-pages/coming-soon',
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
];
export default routesConfig;
