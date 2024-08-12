import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'buttonPreview',
  title: 'ButtonPreview',
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
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }).required(),
    }),
  ],
})
