import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Config } from '~/config'
import AnalyticLayout from '~/layouts/AnalyticLayout'
import DefaultLayout from '~/layouts/DefaultLayout'
import { LayoutProps } from '~/layouts/layout.types'
import HomeFindHelpSection from '~/partials/home/HomeFindHelpSection'
import HomeHaveQuestionSection from '~/partials/home/HomeHaveQuestionSection'
import HomeHeadSection from '~/partials/home/HomeHeadSection'
import DefaultSeo from '~/partials/seo/DefaultSeo'

type Props = LayoutProps

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || 'tr', ['common'])),
      accessTokenIsExists: !!ctx.req.cookies[Config.cookies.accessToken],
      accountCookie: ctx.req.cookies[Config.cookies.accountName] ?? '',
    },
  }
}

export default function Home({ ...layoutProps }: Props) {
  return (
    <AnalyticLayout>
      <DefaultSeo />
      <DefaultLayout {...layoutProps} fillHeader={false}>
        <HomeHeadSection />
        <HomeFindHelpSection />
        <HomeHaveQuestionSection />
      </DefaultLayout>
    </AnalyticLayout>
  )
}
