export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-10-18'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_API_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_API_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID ||
  'missing-project'
