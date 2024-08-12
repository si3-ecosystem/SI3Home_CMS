import {defineType, defineField} from 'sanity'
import {FaRegHandshake} from 'react-icons/fa'

export default defineType({
  name: 'onboard',
  title: 'Onboard',
  type: 'document',
  icon: () => <FaRegHandshake />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
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
        layout: 'dropdown', // Display as a dropdown menu
      },
      initialValue: 'black', // Default color
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
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
          name: 'link',
          title: 'Button Link',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }).required(),
        }),
        defineField({
          name: 'type',
          title: 'Button Type',
          type: 'string',
          options: {
            list: [
              {title: 'Button', value: 'button'},
              {title: 'Submit', value: 'submit'},
              {title: 'Reset', value: 'reset'},
            ],
            layout: 'dropdown', // Display as a dropdown menu
          },
          initialValue: 'button', // Default button type
        }),
      ],
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
