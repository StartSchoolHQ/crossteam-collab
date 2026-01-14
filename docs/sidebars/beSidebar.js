export const beSidebar = [
    {
      type: 'category',
      label: "Backend",
      link: {
        type: 'generated-index',
      },
      items: [
        'BE/be-intro',
        'BE/be-db',
        'BE/be-sec',
        'BE/be-lang',
        'BE/be-api',
        // 'BE/be-patterns',
        'BE/be-scen',
        'BE/be-key',
        
        {
            type: 'category',
            label: 'TASK ',
            items: [

                'BE/Task/be-task1',
                {
                  type: 'category',
                  label: 'Option A ',
                  items: [
                   'BE/Task/be-task2',
                   'BE/Task/be-task10',
                  ]
              },
              {
                type: 'category',
                label: 'Option B ',
                items: [
                 'BE/Task/be-task3',
                 'BE/Task/be-task8',
                 'BE/Task/be-task9',
                ]
            },
                // 'BE/Task/be-task3',
                'BE/Task/be-task4',
                'BE/Task/be-task5',
                'BE/Task/be-task6',
                'BE/Task/be-task7',
                // 'BE/Task/be-task8',
                // 'BE/Task/be-task9',
            ],
          },
          
      ],
    },
  ];
  