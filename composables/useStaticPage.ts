import type { Article } from '@/types'

export async function useStaticPage(path: string): Promise<Article> {
  const { data: page } = await useAsyncData(path, () => queryContent<Article>(path).findOne())

  if (!page.value)
    throw createError({ statusCode: 404, statusMessage: 'Page not found' })

  return page.value
}
