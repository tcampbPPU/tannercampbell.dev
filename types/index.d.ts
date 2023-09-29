import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Article extends ParsedContent {
  title: string
  description: string
  slug: string
  tags?: string[]
  createdAt: string
  updatedAt: string
}

export type Articles = Article[]
