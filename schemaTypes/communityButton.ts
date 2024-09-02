import { defineType, defineField } from "sanity";

export default defineType({
  name: "communityButton",
  type: "document",
  title: "Community Button",
  fields: [
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
          type: 'url',
        }),
      ],
    }),
  ],
});
