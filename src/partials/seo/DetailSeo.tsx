import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { FC } from 'react'
import { makeHtmlTitle } from '~/utils/seo'

type Props = {
  title: string
  keywords: string
}

const DetailSeo: FC<Props> = ({ title, keywords }) => {
  const { t } = useTranslation('common')
  return (
    <Head>
      <title>{makeHtmlTitle(title)}</title>
      <meta name='description' content={t('seo.detail.description')} />
      <meta name='keywords' content={keywords} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={t('seo.detail.description')} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={t('seo.detail.description')} />
    </Head>
  )
}

export default DetailSeo
