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
            label: 'TASK 1 | Practical Git & GitHub use',
            items: [
              'VersionManagement/Task1/git-github-exploration-task',
              'VersionManagement/Task1/git-github-exploration-repo',
              'VersionManagement/Task1/git-github-exploration-commits',
              'VersionManagement/Task1/git-github-exploration-content',
              'VersionManagement/Task1/git-github-exploration-branches',
              'VersionManagement/Task1/git-github-exploration-content',
              'VersionManagement/Task1/git-github-exploration-real',

            ],
          },
        
        {
          type: 'category',
          label: 'TASK 2 | Practical Git & GitHub use',
          items: [
            'VersionManagement/Task/task-github',
          ],
        },
        'VersionManagement/git-cheatsheet',

  
      ],
    },
  ];
  