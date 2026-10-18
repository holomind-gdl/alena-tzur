import { defineArrayMember, defineField, defineType } from 'sanity'

export const course = defineType({
  name: 'course',
  title: 'Курс',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название курса',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Подзаголовок',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Цена',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'oldPrice',
      title: 'Старая цена',
      type: 'string',
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
    select: { title: 'name' },
    prepare({ title }) {
      return { title: `Курс: ${title}` }
    },
  },
})
