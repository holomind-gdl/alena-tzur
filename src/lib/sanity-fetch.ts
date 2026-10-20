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
import {
  brand,
  course,
  curriculum,
  email,
  faq,
  instructor,
  modules,
  navLinks,
  phone,
  location,
  pricing,
  results,
} from '@/lib/data'

async function fetchOrFallback<T>(query: string, fallback: T): Promise<T> {
  if (!client) return fallback

  try {
    return (await client.fetch<T>(query)) ?? fallback
  } catch {
    return fallback
  }
}

export function getSiteSettings() {
  return fetchOrFallback(siteSettingsQuery, { brand, navLinks, email, phone, location })
}

export function getCourse() {
  return fetchOrFallback(courseQuery, course)
}

export function getModules() {
  return fetchOrFallback(modulesQuery, modules)
}

export function getCurriculum() {
  return fetchOrFallback(curriculumQuery, curriculum)
}

export function getInstructor() {
  return fetchOrFallback(instructorQuery, instructor)
}

export function getResults() {
  return fetchOrFallback(resultsQuery, results)
}

export function getPricing() {
  return fetchOrFallback(pricingQuery, pricing)
}

export function getFAQ() {
  return fetchOrFallback(faqQuery, faq)
}
