import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Настройки сайта',
  type: 'document',
  fields: [
    defineField({
      name: 'brand',
      title: 'Название бренда',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Телефон',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Местоположение',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navLinks',
      title: 'Навигационные ссылки',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'href', title: 'Ссылка', type: 'string' }),
            defineField({ name: 'label', title: 'Текст ссылки', type: 'string' }),
          ],
          preview: {
            select: { label: 'label', href: 'href' },
            prepare({ label, href }) {
              return { title: label, subtitle: href }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'brand' },
    prepare({ title }) {
      return { title: `Настройки: ${title}` }
    },
  },
})
