import {GoHome} from 'react-icons/go'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: () => <GoHome />,
  fields: [
    defineField({
      name: 'headingOne',
      title: 'Heading One',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingTwo',
      title: 'Heading Two',
      type: 'string',
    }),
    defineField({
      name: 'subHeader',
      title: 'Sub Header',
      type: 'text',
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'link',
          title: 'Link',
          type: 'button',
        }),
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
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
  ],
  preview: {
    select: {
      title: 'headingOne',
      subtitle: 'headingTwo',
      media: 'heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
