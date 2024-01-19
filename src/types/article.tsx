import { I18nTranslation } from '@turistikrota/ui/types'

export type Article = {
  uuid: string
  categoryId: string
  meta: I18nTranslation<ArticleMeta>
}

export type ArticleMeta = {
  title: string
  slug: string
  keywords: string
}

export const EmptyArticleMeta: ArticleMeta = {
  title: '',
  slug: '',
  keywords: '',
}
