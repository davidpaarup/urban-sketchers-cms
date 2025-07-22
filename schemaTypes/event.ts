import {defineType} from 'sanity'

export const event= defineType({
    name: 'event',
    title: 'Events',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Event Title',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 3
      },
      {
        name: 'date',
        title: 'Date',
        type: 'date',
        validation: Rule => Rule.required()
      },
      {
        name: 'time',
        title: 'Start Time',
        type: 'string',
        validation: Rule => Rule.required().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
      },
      {
        name: 'location',
        title: 'Location',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'maxAttendees',
        title: 'Maximum Attendees',
        type: 'number'
      },
      {
        name: 'skillLevel',
        title: 'Skill Level',
        type: 'string',
        options: {
          list: [
            {title: 'All Levels', value: 'all'},
            {title: 'Beginner', value: 'beginner'},
            {title: 'Intermediate', value: 'intermediate'},
            {title: 'Advanced', value: 'advanced'}
          ]
        }
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'image',
        title: 'Event Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ],
    preview: {
      select: {
        title: 'title',
        date: 'date',
        location: 'location',
        media: 'image'
      },
      prepare(selection) {
        const {title, date, location} = selection
        return {
          title: title,
          subtitle: `${new Date(date).toLocaleDateString()} - ${location}`
        }
      }
    }
  })