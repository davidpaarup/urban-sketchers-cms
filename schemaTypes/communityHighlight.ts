import {defineType} from 'sanity'

export const communityHighlight = defineType({
  name: 'communityHighlight',
  title: 'Community Highlight',
  type: 'document',
  fields: [
    { name: 'artist', type: 'string', title: 'Artist' },
    { name: 'artwork', type: 'string', title: 'Artwork' },
    { name: 'medium', type: 'string', title: 'Medium' },
    { name: 'likes', type: 'number', title: 'Likes' },
    // Optionally add an image field:
    // { name: 'image', type: 'image', title: 'Artwork Image' },
  ],
})