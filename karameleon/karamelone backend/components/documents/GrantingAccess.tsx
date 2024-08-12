import {defineType, defineField} from 'sanity'
import {BsCalendar4Event} from 'react-icons/bs'

export default defineType({
  name: 'grantingAccess',
  title: 'Upcoming Events',
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
        sortable: true,
      },
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          description: 'Text to display on the button',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'url',
          description: 'URL that the button will link to',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
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
