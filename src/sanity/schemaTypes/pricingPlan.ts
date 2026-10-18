import { defineArrayMember, defineField, defineType } from 'sanity'

export const pricingPlan = defineType({
  name: 'pricingPlan',
  title: 'Тариф',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Название тарифа',
      type: 'string',
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
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Возможности',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'cta',
      title: 'Текст кнопки',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'popular',
      title: 'Популярный выбор',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', popular: 'popular' },
    prepare({ title, popular }) {
      return { title, subtitle: popular ? 'Популярный' : '' }
    },
  },
})
