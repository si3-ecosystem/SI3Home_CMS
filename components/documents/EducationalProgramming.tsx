import {defineType, defineField} from 'sanity'
import {GrWorkshop} from 'react-icons/gr'

export default defineType({
  name: 'educationalProgramming',
  title: 'Educational Programming',
  type: 'document',
  icon: () => <GrWorkshop />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'Events',
      title: 'Event ',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'educationalProgrammingEvents'}]}],
      options: {
        sortable: true, // Enables sorting of items
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
