import { I18nTranslation } from '@turistikrota/ui/types'

export type Category = {
  uuid: string
  meta: I18nTranslation<CategoryMeta>
  order: number
}

export type CategoryMeta = {
  title: string
}

export type Article = {
  uuid: string
  categoryId: string
  meta: I18nTranslation<ArticleMeta>
  order: number
}

export type ArticleMeta = {
  title: string
  slug: string
  keywords: string
}

export type GuideResponseItem = {
  category: Category
  articles: Article[]
}

export const EmptyCategoryMeta: CategoryMeta = {
  title: '',
}

export const EmptyArticleMeta: ArticleMeta = {
  title: '',
  slug: '',
  keywords: '',
}
