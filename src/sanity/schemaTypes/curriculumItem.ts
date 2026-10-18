import { defineField, defineType } from 'sanity'

export const curriculumItem = defineType({
  name: 'curriculumItem',
  title: 'Урок программы',
  type: 'document',
  fields: [
    defineField({
      name: 'module',
      title: 'Номер модуля',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1).max(6),
    }),
    defineField({
      name: 'lesson',
      title: 'Номер урока',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Название урока',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Тип урока',
      type: 'string',
      options: {
        list: ['видео', 'практика', 'теория'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Длительность',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'title', module: 'module', lesson: 'lesson' },
    prepare({ title, module, lesson }) {
      return { title: `Модуль ${module}, урок ${lesson}: ${title}` }
    },
  },
})
