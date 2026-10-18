import { defineArrayMember, defineField, defineType } from 'sanity'

export const module = defineType({
  name: 'module',
  title: 'Модуль',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Название модуля',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lessons',
      title: 'Количество уроков',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Изображение модуля',
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
      name: 'topics',
      title: 'Темы',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: {
    select: { title: 'title', media: 'image' },
    prepare({ title, media }) {
      return { title, media }
    },
  },
})
