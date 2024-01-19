import { getMdContent } from '@turistikrota/ui/utils/md'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MarkdownContent from '~/components/markdown/MarkdownContent'
import { Config } from '~/config'
import { Services, apiUrl } from '~/config/services'
import AnalyticLayout from '~/layouts/AnalyticLayout'
import DefaultLayout from '~/layouts/DefaultLayout'
import { LayoutProps } from '~/layouts/layout.types'
import HomeHeadSection from '~/partials/home/HomeHeadSection'
import DetailSeo from '~/partials/seo/DetailSeo'
import { Article, EmptyArticleMeta } from '~/types/article'
import { makeMdUrl } from '~/utils/cdn'
import { httpClient } from '~/utils/http'
import { getI18nTranslations } from '~/utils/i18n'
import NotFoundView from './404'

type Props = LayoutProps & {
  details: Article | null
  md: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug
  const locale = ctx.locale || 'tr'
  const res = await httpClient.get(apiUrl(Services.Help, `/${slug}`), {
    headers: {
      'Accept-Language': locale,
    },
  })
  if (res.status === 404) {
    return {
      notFound: true,
    }
  }
  let md = ''
  if (res && res.data && res.data.uuid) {
    md = await getMdContent(makeMdUrl(`${res.data.uuid}.${locale}`))
  }
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || 'tr', ['common'])),
      details: res.data || null,
      md,
      accessTokenIsExists: !!ctx.req.cookies[Config.cookies.accessToken],
      accountCookie: ctx.req.cookies[Config.cookies.accountName] ?? '',
    },
  }
}

export default function DetailPage({ details, md, ...layoutProps }: Props) {
  const { t, i18n } = useTranslation('common')

  if (!details) return <NotFoundView />

  const translations = getI18nTranslations(details.meta, i18n.language, EmptyArticleMeta)
  return (
    <AnalyticLayout>
      <DetailSeo title={translations.title} keywords={translations.keywords} />
      <DefaultLayout {...layoutProps} fillHeader={false}>
        <HomeHeadSection title={translations.title} isDetail />
        <section className='mx-auto max-w-7xl py-8 md:py-12'>
          <MarkdownContent content={md} />
        </section>
      </DefaultLayout>
    </AnalyticLayout>
  )
}
