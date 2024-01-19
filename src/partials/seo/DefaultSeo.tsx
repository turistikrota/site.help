import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { FC } from 'react'
import { makeHtmlTitle } from '~/utils/seo'

const DefaultSeo: FC = () => {
  const { t } = useTranslation('common')
  return (
    <Head>
      <title>{makeHtmlTitle(t('seo.default.title'))}</title>
      <meta name='description' content={t('seo.default.description')} />
      <meta name='keywords' content={t('seo.default.keywords')} />
      <meta property='og:title' content={t('seo.default.title')} />
      <meta property='og:description' content={t('seo.default.description')} />
      <meta name='twitter:title' content={t('seo.default.title')} />
      <meta name='twitter:description' content={t('seo.default.description')} />
    </Head>
  )
}

export default DefaultSeo
