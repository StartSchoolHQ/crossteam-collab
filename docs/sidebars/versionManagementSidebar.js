export const versionManagementSidebar = [
    {
      type: 'category',
      label: "Version management",
      link: {
        type: 'generated-index',
      },
      items: [
        'VersionManagement/version-intro',
        'VersionManagement/git-intro',
        'VersionManagement/github-intro',
        'VersionManagement/why-use',
        'VersionManagement/git-concepts',
        'VersionManagement/git-workflow',
        'VersionManagement/git-commands',
        
        {
          type: 'category',
          label: 'TASK | Practical Git & GitHub use',
          items: [
            'VersionManagement/Task/task-github',
            // 'VersionManagement/LoginExample/5-fe-ux-ui',
            // 'VersionManagement/LoginExample/6-fe-js',
            // 'VersionManagement/LoginExample/7-api',
            // 'VersionManagement/LoginExample/8-be',
            // 'VersionManagement/LoginExample/9-database',
            // 'VersionManagement/LoginExample/10-complete-workflow',
          ],
        },
  
      ],
    },
  ];
  