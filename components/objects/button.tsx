// @ts-nocheck

export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    {
      name: 'external',
      type: 'url',
      title: 'URL',
      hidden: ({parent, value}) => !value && !!parent?.internal,
    },
    // {
    //   name: 'internal',
    //   type: 'reference',
    //   to: [{type: 'page'}, {type: 'article'}, {type: 'homePage'}],
    //   hidden: ({parent, value}) => !value && !!parent?.external,
    // },
  ],
}
