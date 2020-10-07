export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7e2085ca00b50e1d47841a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-8jftygqv',
                  apiId: 'e9e4af57-a0f9-4b90-899a-666cce8fbc7a'
                },
                {
                  buildHookId: '5f7e2085728cde0ffddebfdc',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-54adcriu',
                  apiId: '114c05ec-89fd-4fa4-a8ce-ec4270a488cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slondr/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-54adcriu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
