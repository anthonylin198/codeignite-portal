const routesConfig = [
  {
    id: 'dashboards',
    title: 'Your Profile',
    messageId: 'My Profile',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'healthCare',
        title: 'Health Care',
        messageId: 'View Profile',
        type: 'item',
        url: '/dashboards/health-care',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        messageId: 'Edit Profile',
        type: 'item',
        url: '/dashboards/e-commerce',
      },
    ],
  },

  {
    id: 'healthCare',
    title: 'Health Care',
    messageId: 'Dashboard',
    type: 'item',
    url: '/dashboards/academy',
  },
  {
    id: 'dashboards',
    title: 'Your Profile',
    messageId: 'Academy',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'healthCare',
        title: 'Health Care',
        messageId: 'View Profile',
        type: 'item',
        url: '/ecommerce/product_detail',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        messageId: 'Edit Profile',
        type: 'item',
        url: '/ecommerce/customers',
      },
    ],
  },
  {
    id: 'dashboards',
    title: 'Your Profile',
    messageId: 'Directory',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'healthCare',
        title: 'Health Care',
        messageId: 'View Profile',
        type: 'item',
        url: '/dashboards/analytics',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        messageId: 'Messages',
        type: 'item',
        url: '/apps/chat',
      },
    ],
  },

  // {
  //   id: 'app',
  //   title: 'Academy',
  //   messageId: 'Academy',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'Curriculum',
  //       title: 'Academy',
  //       messageId: 'Curriculum',
  //       type: 'item',
  //       url: '/dashboards/academy',
  //     },
  //   ],
  // },
  // {
  //   id: 'app',
  //   title: 'Directory',
  //   messageId: 'sidebar.application',
  //   type: 'group',
  //   children: [
  //     {
  //       id: 'dashboards',
  //       title: 'Your Profile',
  //       messageId: 'Directory',
  //       type: 'collapse',
  //       icon: 'dashboard',
  //       children: [
  //         {
  //           id: 'healthCare',
  //           title: 'Health Care',
  //           messageId: 'sidebar.healthCare',
  //           type: 'item',
  //           url: '/dashboards/health-care',
  //         },
  //         {
  //           id: 'e-commerce',
  //           title: 'E-Commerce',
  //           messageId: 'sidebar.app.dashboard.eCommerce',
  //           type: 'item',
  //           url: '/dashboards/e-commerce',
  //         },
  //       ],
  //     },
  //     {
  //       id: 'academy',
  //       title: 'Academy',
  //       messageId: 'sidebar.app.dashboard.academy',
  //       type: 'item',
  //       url: '/dashboards/academy',
  //     },
  //   ],
  // },
];
export default routesConfig;
