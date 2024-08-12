import {defineType, defineField} from 'sanity'
import {FaUsersViewfinder} from 'react-icons/fa6'

export default defineType({
  name: 'memberSpotlight',
  title: 'Co-Activator Spotlight',
  type: 'document',
  icon: () => <FaUsersViewfinder />,

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
      name: 'teammembers',
      title: 'Member Headshot',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teammembers'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
