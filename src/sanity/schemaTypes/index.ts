import { type SchemaTypeDefinition } from 'sanity'

import { siteSettings } from './siteSettings'
import { course } from './course'
import { courseModule } from './module'
import { curriculumItem } from './curriculumItem'
import { instructor } from './instructor'
import { result } from './result'
import { pricingPlan } from './pricingPlan'
import { faq } from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, course, courseModule, curriculumItem, instructor, result, pricingPlan, faq],
}
