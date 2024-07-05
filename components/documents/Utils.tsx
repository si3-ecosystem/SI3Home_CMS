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

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'stayConnected',
      title: 'Stay Connected Url',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn',
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
      title: 'Common Ground',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'warpcast',
      title: 'Warpcast',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'mediakit',
      title: 'Media kit',
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
      name: 'seoTitle',
      title: 'Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoLogo',
      title: 'Seo Logo',
      type: 'image',
      group: 'seo',
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
      type: 'text',
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
