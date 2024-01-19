import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { FC } from 'react'
import { makeHtmlTitle } from '~/utils/seo'

const GuideSeo: FC = () => {
  const { t } = useTranslation('common')
  return (
    <Head>
      <title>{makeHtmlTitle(t('seo.guide.title'))}</title>
      <meta name='description' content={t('seo.guide.description')} />
      <meta name='keywords' content={t('seo.guide.keywords')} />
      <meta property='og:title' content={t('seo.guide.title')} />
      <meta property='og:description' content={t('seo.guide.description')} />
      <meta name='twitter:title' content={t('seo.guide.title')} />
      <meta name='twitter:description' content={t('seo.guide.description')} />
    </Head>
  )
}

export default GuideSeo
