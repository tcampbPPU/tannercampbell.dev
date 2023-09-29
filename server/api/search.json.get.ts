import { serverQueryContent } from '#content/server'

export default eventHandler(async (event) => {
  return await serverQueryContent(event)
    .where({ _path: { $regex: '^/posts/' }, _type: 'markdown', navigation: { $ne: false } })
    .sort({ _file: -1 })
    .find()
})
