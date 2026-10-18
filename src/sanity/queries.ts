import { defineQuery } from 'next-sanity'

export const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]`)

export const courseQuery = defineQuery(`*[_type == "course"][0]`)

export const modulesQuery = defineQuery(`*[_type == "module"] | order(_createdAt asc)`)

export const curriculumQuery = defineQuery(
  `*[_type == "curriculumItem"] | order(module asc, lesson asc)`
)

export const instructorQuery = defineQuery(`*[_type == "instructor"][0]`)

export const resultsQuery = defineQuery(`*[_type == "result"] | order(_createdAt asc)`)

export const pricingQuery = defineQuery(`*[_type == "pricingPlan"] | order(_createdAt asc)`)

export const faqQuery = defineQuery(`*[_type == "faq"] | order(_createdAt asc)`)
