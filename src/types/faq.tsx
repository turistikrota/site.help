import { I18nTranslation } from '@turistikrota/ui/types'

export type Faq = {
  uuid: string
  meta: I18nTranslation<FaqMeta>
  order: number
}

type FaqMeta = {
  title: string
  description: string
  slug: string
  keywords: string
}

export const EmptyFaqMeta: FaqMeta = {
  title: '',
  description: '',
  slug: '',
  keywords: '',
}
