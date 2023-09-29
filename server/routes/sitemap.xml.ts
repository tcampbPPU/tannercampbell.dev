import { SitemapStream, streamToPromise } from 'sitemap'
import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find()
  const sitemap = new SitemapStream({
    // hostname: 'https://tannercampbell.dev',
    hostname: 'https://tannercampbell-dev.vercel.app',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc.slug,
      changefreq: 'monthly',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
