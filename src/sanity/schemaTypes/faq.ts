import { defineField, defineType } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Вопрос-ответ',
  type: 'document',
  fields: [
    defineField({
      name: 'question',
      title: 'Вопрос',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Ответ',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'question' },
    prepare({ title }) {
      return { title: `FAQ: ${title}` }
    },
  },
})
