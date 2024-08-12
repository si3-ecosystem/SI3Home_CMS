import {defineType, defineField, defineArrayMember} from 'sanity'
import {GiReceiveMoney} from 'react-icons/gi'

export default defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  icon: () => <GiReceiveMoney />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'whatYouReceive',
      title: 'What You Receive',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'item',
              title: 'Item',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }).required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
    },
  },
})
