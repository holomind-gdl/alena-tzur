import { defineField, defineType } from 'sanity'

export const result = defineType({
  name: 'result',
  title: 'Результат ученика',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя ученика',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'before',
      title: 'До',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'after',
      title: 'После',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'timeline',
      title: 'Срок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Отзыв',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Фото до',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-текст',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'afterImage',
      title: 'Фото после',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt-текст',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'name' },
    prepare({ title }) {
      return { title: `Результат: ${title}` }
    },
  },
})
