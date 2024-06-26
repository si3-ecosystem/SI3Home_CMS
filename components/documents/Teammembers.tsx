import {defineType, defineField} from 'sanity'
import {GiTeamUpgrade} from 'react-icons/gi'

export default defineType({
  name: 'teammembers',
  title: 'Members (Connect, Collaboration and more)',
  type: 'document',
  icon: () => <GiTeamUpgrade />,

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string',
    }),
    defineField({
      name: 'hobbies',
      title: 'Hobbies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
    }),
    defineField({
      name: 'email',
      title: 'Web3 Page Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Web3 Page Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})
