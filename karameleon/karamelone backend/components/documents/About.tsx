import {defineType, defineField} from 'sanity'
import {IoIosInformationCircleOutline} from 'react-icons/io'

export default defineType({
  name: 'about',
  title: 'Si Her Live',
  type: 'document',
  icon: () => <IoIosInformationCircleOutline />,

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
    defineField({
      name: 'showButton',
      title: 'Show Button',
      type: 'boolean',
    }),
    defineField({
      name: 'CTA',
      title: 'Button',
      type: 'buttonPreview', // Reference to the button schema
      hidden: ({document = {showButton: false}}) => !document.showButton,
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
        media: <span style={{color: titleColor, fontWeight: 'bold'}}>{title}</span>, // To visually represent the color in the preview
      }
    },
  },
})
