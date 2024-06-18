import React from 'react'

import {defineArrayMember, defineField, defineType} from 'sanity'
import {IoSettingsOutline} from 'react-icons/io5'
import Emoji from '../shared/Emoji'

export default defineType({
  name: 'utils',
  title: 'Seo & Logo',
  type: 'document',
  icon: () => <IoSettingsOutline />,
  groups: [
    {
      title: 'Content',
      name: 'content',
      default: true,
      icon: () => <Emoji symbol="📄" size={'1.25em'} />,
    },
    {
      title: 'SEO',
      name: 'seo',
      icon: () => <Emoji symbol="🔍" size={'1.25em'} />,
    },
  ],
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'insta',
      title: 'Instagram',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'twitter',
      title: 'X (Twitter)',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'other',
      title: 'Mask',
      type: 'string',
      group: 'content',
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'content',
      options: {
        hotspot: true, // Enables image cropping and focus point
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
      name: 'overview',
      group: 'seo',
      description: 'Used for the <meta> description tag for SEO.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        subtitle: '',
        title,
      }
    },
  },
})
