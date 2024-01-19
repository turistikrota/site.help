import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import GuideCard from '~/components/card/GuideCard'
import NoResultsFound from '~/components/state/NoResultsFound'
import { Config } from '~/config'
import { Services, apiUrl } from '~/config/services'
import AnalyticLayout from '~/layouts/AnalyticLayout'
import DefaultLayout from '~/layouts/DefaultLayout'
import { LayoutProps } from '~/layouts/layout.types'
import HomeHaveQuestionSection from '~/partials/home/HomeHaveQuestionSection'
import HomeHeadSection from '~/partials/home/HomeHeadSection'
import GuideSeo from '~/partials/seo/GuideSeo'
import { EmptyArticleMeta, EmptyCategoryMeta, GuideResponseItem } from '~/types/guide'
import { httpClient } from '~/utils/http'
import { getI18nTranslations } from '~/utils/i18n'

type Props = LayoutProps & {
  guides: GuideResponseItem[]
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const q = ctx.query.q
  const locale = ctx.locale || 'tr'
  const res = await httpClient.get(apiUrl(Services.Help, `/${q ? `?q=${q}` : ''}`), {
    headers: {
      'Accept-Language': locale,
    },
  })
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || 'tr', ['common'])),
      guides: res.data || [],
      accessTokenIsExists: !!ctx.req.cookies[Config.cookies.accessToken],
      accountCookie: ctx.req.cookies[Config.cookies.accountName] ?? '',
    },
  }
}

export default function GuidePage({ guides, ...layoutProps }: Props) {
  const { t, i18n } = useTranslation('common')
  return (
    <AnalyticLayout>
      <GuideSeo />
      <DefaultLayout {...layoutProps} fillHeader={false}>
        <HomeHeadSection title={t('guide.title')} />
        <section className='container relative mx-auto py-16 md:py-24'>
          {guides.length === 0 && <NoResultsFound />}
          {guides.length > 0 && (
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {guides.map((guide, idx) => (
                <GuideCard
                  key={idx}
                  title={getI18nTranslations(guide.category.meta, i18n.language, EmptyCategoryMeta).title}
                  subItems={guide.articles.map((article) => ({
                    slug: getI18nTranslations(article.meta, i18n.language, EmptyArticleMeta).slug,
                    title: getI18nTranslations(article.meta, i18n.language, EmptyArticleMeta).title,
                  }))}
                />
              ))}
            </div>
          )}
        </section>
        <HomeHaveQuestionSection />
      </DefaultLayout>
    </AnalyticLayout>
  )
}
