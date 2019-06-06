module.exports = {
    title: 'Redux',
    description: 'A predictable state container for JavaScript apps.',
    base: '/Redux-VuePress/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/introduction/GettingStarted' },
            { text: 'External', link: 'https://google.com' },
          ],
        editLinks: true,
        sidebar:[
            {
                title: 'Introduction',
                children:[
                    ['/introduction/GettingStarted','Getting Started with Redux'],
                    ['/introduction/Installation','Installation'],
                    ['/introduction/Motivation','Motivation'],
                    ['/introduction/CoreConcepts','Core Concepts'],
                    ['/introduction/ThreePrinciples','Three Principles'],
                    ['/introduction/PriorArt','Prior Art'],
                    ['/introduction/LearningResources','Learning Resources'],
                    ['/introduction/Ecosystem','Ecosystem'],
                    ['/introduction/Examples','Examples']
                ]
            },
            {
                title: 'Basic Tutorial',
                children:[
                    ['/basics/basics','Basic Tutorial: Intro'],
                    ['/basics/Actions','Actions'],
                    ['/basics/Reducers','Reducers'],
                    ['/basics/Store','Store'],
                    ['/basics/DataFlow','Data Flow'],
                    ['/basics/UsageWithReact','Usage with React'],
                    ['/basics/ExampleTodoList','Example: Todo List']
                ]
            },
            {
                title: 'Advanced Tutorial',
                children:[
                    ['/advanced/advanced','Advanced Tutorial: Intro'],
                    ['/advanced/AsyncActions','Async Actions'],
                    ['/advanced/AsyncFlow','Async Flow'],
                    ['/advanced/Middleware','Middleware'],
                    ['/advanced/UsageWithReactRouter','Usage with React Router'],
                    ['/advanced/ExampleRedditAPI','Example: Reddit API'],
                    ['/advanced/NextSteps','Next Steps']
                ]
            },
            {
                title: 'Recipes',
                children:[
                    ['/recipes/recipes','Recipes: Index'],
                    ['/recipes/ConfiguringYourStore','Configuring Your Store'],
                    ['/recipes/MigratingToRedux','Migrating to Redux'],
                    ['/recipes/UsingObjectSpreadOperator','Using Object Spread Operator'],
                    ['/recipes/ReducingBoilerplate','Reducing Boilerplate'],
                    ['/recipes/ServerRendering','Server Rendering'],
                    ['/recipes/WritingTests','Writing Tests'],
                    ['/recipes/ComputingDerivedData','Computing Derived Data'],
                    ['/recipes/ImplementingUndoHistory','Implementing Undo History'],
                    ['/recipes/IsolatingSubapps','Isolating Subapps'],
                ]
            },
            {
                title: 'FAQ',
                children:[
                    ['/FAQ','FAQ Index'],
                    ['/faq/General','General'],
                    ['/faq/Reducers','Reducers'],
                    ['/faq/OrganizingState','Organizing State'],
                    ['/faq/StoreSetup','Store Setup'],
                    ['/faq/Actions','Actions'],
                    ['/faq/ImmutableData','Immutable Data'],
                    ['/faq/CodeStructure','Code Structure'],
                    ['/faq/Performance','Performance'],
                    ['/faq/DesignDecisions','Design Decisions'],
                    ['/faq/ReactRedux','React Redux'],
                    ['/faq/Miscellaneous','Miscellaneous']
                ]
            },
            {
                title: 'Other',
                children:[
                    ['/Glossary','Glossary'],
                    ['/Troubleshooting','Troubleshooting'],
                    ['/Feedback','Feedback']
                ]
            }
        ]
    }
  }
