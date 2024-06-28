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
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'builders',
      title: 'Event Speakers',
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
