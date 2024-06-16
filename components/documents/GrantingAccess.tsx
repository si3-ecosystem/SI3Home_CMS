import {defineType, defineField} from 'sanity'
import {BsCalendar4Event} from 'react-icons/bs'

export default defineType({
  name: 'grantingAccess',
  title: 'Granting Access',
  type: 'document',
  icon: () => <BsCalendar4Event />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blockContent',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'builders',
      title: 'Headlining Speakers ( Builders )',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'builders'}]}],
      options: {
        sortable: true, // Enables sorting of items
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
