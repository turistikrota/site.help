import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { FC } from 'react'
import { makeHtmlTitle } from '~/utils/seo'

const FaqSeo: FC = () => {
  const { t } = useTranslation('common')
  return (
    <Head>
      <title>{makeHtmlTitle(t('seo.faq.title'))}</title>
      <meta name='description' content={t('seo.faq.description')} />
      <meta name='keywords' content={t('seo.faq.keywords')} />
      <meta property='og:title' content={t('seo.faq.title')} />
      <meta property='og:description' content={t('seo.faq.description')} />
      <meta name='twitter:title' content={t('seo.faq.title')} />
      <meta name='twitter:description' content={t('seo.faq.description')} />
    </Head>
  )
}

export default FaqSeo
