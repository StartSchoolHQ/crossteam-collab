export const webAppWorkflowSidebar = [
  {
    type: 'category',
    label: "Web application workflow",
    link: {
      type: 'generated-index',
      description: 'Web application workflow',
    },
    items: [
      'WebAppWorkflow/1-web-workflow-intro',
      'WebAppWorkflow/2-restaurant-analogy',
      'WebAppWorkflow/3-app-components',
      'WebAppWorkflow/4-comparison-table',
      {
        type: 'category',
        label: 'TASK | Login Example',
        items: [
          'WebAppWorkflow/LoginExample/5a-login-form',
          'WebAppWorkflow/LoginExample/5-fe-ux-ui',
          'WebAppWorkflow/LoginExample/6-fe-js',
          'WebAppWorkflow/LoginExample/7-api',
          'WebAppWorkflow/LoginExample/8-be',
          'WebAppWorkflow/LoginExample/9-database',
          'WebAppWorkflow/LoginExample/10-complete-workflow',
        ],
      },
      'WebAppWorkflow/11-developer-tools',

    ],
  },
];
