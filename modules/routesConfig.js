const routesConfig = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'dashboards',
        title: 'Your Profile',
        messageId: 'sidebar.app.dashboard',
        type: 'collapse',
        icon: 'dashboard',
        children: [
          {
            id: 'healthCare',
            title: 'Health Care',
            messageId: 'sidebar.healthCare',
            type: 'item',
            url: '/dashboards/health-care',
          },
          {
            id: 'e-commerce',
            title: 'E-Commerce',
            messageId: 'sidebar.app.dashboard.eCommerce',
            type: 'item',
            url: '/dashboards/e-commerce',
          },
        ],
      },
      {
        id: 'academy',
        title: 'Academy',
        messageId: 'sidebar.app.dashboard.academy',
        type: 'item',
        url: '/dashboards/academy',
      },
    ],
  },
];
export default routesConfig;
