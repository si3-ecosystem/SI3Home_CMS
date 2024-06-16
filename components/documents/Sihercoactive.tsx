import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'sihercoactive',
  title: 'Si Her Co-Active',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'titleColor',
      title: 'Title Color',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'Green', value: 'green'},
          {title: 'Blue', value: 'blue'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
        ],
        layout: 'dropdown',
      },
      initialValue: 'black',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      titleColor: 'titleColor',
    },
    prepare({title, subtitle, titleColor}) {
      return {
        title,
        subtitle,
        media: <span style={{color: titleColor, fontWeight: 'bold'}}>{title}</span>, // Visual representation of title color in preview
      }
    },
  },
})
