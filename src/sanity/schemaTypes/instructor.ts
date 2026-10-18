import { defineArrayMember, defineField, defineType } from 'sanity'

export const instructor = defineType({
  name: 'instructor',
  title: 'Преподаватель',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Должность',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Биография',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Фото преподавателя',
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
      name: 'credentials',
      title: 'Квалификации',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'stats',
      title: 'Статистика',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Значение', type: 'string' }),
            defineField({ name: 'label', title: 'Подпись', type: 'string' }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'name', media: 'image' },
    prepare({ title, media }) {
      return { title: `Преподаватель: ${title}`, media }
    },
  },
})
