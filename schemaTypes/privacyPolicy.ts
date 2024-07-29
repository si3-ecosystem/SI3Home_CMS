import { defineType,defineField } from "sanity";

export default defineType({
    name: 'privacyPolicy',
    title: 'Privacy Policy',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
      }),
      defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
    ],
    orderings: [
      {
        title: 'Release Date, New',
        name: 'releaseDateDesc',
        by: [
          {field: 'releaseDate', direction: 'desc'}
        ]}]
  })