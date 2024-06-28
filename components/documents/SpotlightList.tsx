import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'spotlightList',
  title: 'Spotlight List (Education from industry leaders)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Presentation Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // }),
    // defineField({
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //     },
    //   ],
    // }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
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
      name: 'presenterName',
      title: 'Presenter Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'presenterTitle',
      title: 'Presenter Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'teamMember',
    //   title: 'Team Member',
    //   type: 'reference',
    //   to: [{type: 'teammembers'}],
    // }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
