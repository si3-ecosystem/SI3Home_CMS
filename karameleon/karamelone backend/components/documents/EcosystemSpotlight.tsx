import {defineType, defineField} from 'sanity'
import {SiArkecosystem} from 'react-icons/si'

export default defineType({
  name: 'ecosystemSpotlight',
  title: 'Ecosystem Spotlight',
  type: 'document',
  icon: () => <SiArkecosystem />,

  fields: [
    defineField({
      name: 'title',
      title: 'Presentation Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'spotlightList',
      title: 'Spotlight List',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'spotlightList'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
