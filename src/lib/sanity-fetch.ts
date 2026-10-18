import { client } from '@/sanity/lib/client'
import {
  courseQuery,
  faqQuery,
  instructorQuery,
  modulesQuery,
  curriculumQuery,
  pricingQuery,
  resultsQuery,
  siteSettingsQuery,
} from '@/sanity/queries'

export async function getSiteSettings() {
  return client.fetch(siteSettingsQuery)
}

export async function getCourse() {
  return client.fetch(courseQuery)
}

export async function getModules() {
  return client.fetch(modulesQuery)
}

export async function getCurriculum() {
  return client.fetch(curriculumQuery)
}

export async function getInstructor() {
  return client.fetch(instructorQuery)
}

export async function getResults() {
  return client.fetch(resultsQuery)
}

export async function getPricing() {
  return client.fetch(pricingQuery)
}

export async function getFAQ() {
  return client.fetch(faqQuery)
}
