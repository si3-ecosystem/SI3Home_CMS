import {defineType, defineField} from 'sanity'
import {IoIosInformationCircleOutline} from 'react-icons/io'

export default defineType({
  name: 'register',
  title: 'Register Now',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'stream',
      title: 'Streaming Live',
      type: 'string',
    }),
    // defineField({
    //   name: 'apple',
    //   title: 'Apple Link',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'google',
    //   title: 'Google Link',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'office',
    //   title: 'Office 365',
    //   type: 'string',
    // }),
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
