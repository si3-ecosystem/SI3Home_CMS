import {defineType, defineField} from 'sanity'
import {MdOutlineVideoCameraFront} from 'react-icons/md'

export default defineType({
  name: 'web3brand',
  title: 'Web3 Brand',
  type: 'document',
  icon: () => <MdOutlineVideoCameraFront />,

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryItem',
          fields: [
            defineField({
              name: 'galleryTitle',
              title: 'Gallery Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [{type: 'image'}],
              options: {
                layout: 'grid',
              },
            }),
          ],
        },
      ],
      options: {
        sortable: true,
      },
    }),
    // defineField({
    //   name: 'video',
    //   title: 'Video',
    //   type: 'mux.video',
    //   description: 'Add a video using Mux integration.',
    //   options: {
    //     accept: '.mp4,.mov,.avi', // Example of accepted file types
    //   },
    // }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      description: 'Upload a video file (mp4, mov, avi, etc.).',
      options: {
        accept: 'video/mp4,video/quicktime,video/x-msvideo', // Example of accepted video file types
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
})
