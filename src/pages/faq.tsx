import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FaqSection from '~/components/card/FaqSection'
import NoResultsFound from '~/components/state/NoResultsFound'
import { Config } from '~/config'
import { Services, apiUrl } from '~/config/services'
import AnalyticLayout from '~/layouts/AnalyticLayout'
import DefaultLayout from '~/layouts/DefaultLayout'
import { LayoutProps } from '~/layouts/layout.types'
import HomeHaveQuestionSection from '~/partials/home/HomeHaveQuestionSection'
import HomeHeadSection from '~/partials/home/HomeHeadSection'
import FaqSeo from '~/partials/seo/FaqSeo'
import { Faq } from '~/types/faq'
import { httpClient } from '~/utils/http'

type Props = LayoutProps & {
  faqs: Faq[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const locale = ctx.locale || 'tr'
  const res = await httpClient.get(apiUrl(Services.Help, `/faq`), {
    headers: {
      'Accept-Language': locale,
    },
  })
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      faqs: res.data || [],
      accessTokenIsExists: !!ctx.req.cookies[Config.cookies.accessToken],
      accountCookie: ctx.req.cookies[Config.cookies.accountName] ?? '',
    },
  }
}

export default function FaqPage({ faqs, ...layoutProps }: Props) {
  const { t } = useTranslation('common')
  return (
    <AnalyticLayout>
      <FaqSeo />
      <DefaultLayout {...layoutProps} fillHeader={false}>
        <HomeHeadSection title={t('faq.title')} isDetail />
        {faqs.length === 0 && <NoResultsFound />}
        {faqs.length > 0 && <FaqSection faqs={faqs} />}
        <HomeHaveQuestionSection />
      </DefaultLayout>
    </AnalyticLayout>
  )
}
