import {defineType, defineField, defineArrayMember} from 'sanity'
import {PiTargetDuotone} from 'react-icons/pi'

export default defineType({
  name: 'ourMission',
  title: 'Our Mission',
  type: 'document',
  icon: () => <PiTargetDuotone />,

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
      name: 'values',
      title: 'Values',
      type: 'object',
      fields: [
        defineField({
          name: 'lists',
          title: 'Lists',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'string',
              title: 'List Item',
              validation: (Rule) => Rule.max(100).error('List item cannot exceed 100 characters'),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
