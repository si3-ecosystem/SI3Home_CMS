import {defineType, defineField} from 'sanity'
import {MdOutlineEmojiEvents} from 'react-icons/md'

export default defineType({
  name: 'educationalProgrammingEvents',
  title: 'Educational Programming Events',
  type: 'document',
  icon: () => <MdOutlineEmojiEvents />,

  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
      validation: (rule) => rule.required(),
    }),

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
      name: 'presenters',
      title: 'Event Speakers',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'presenters'}]}],
      options: {
        sortable: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
