import DefaultCard from '@turistikrota/ui/cards/default'
import LandingSection from '@turistikrota/ui/section/landing'
import { Locales } from '@turistikrota/ui/types'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { SiteUrls } from '~/static/site'

type Item = {
  key: string
  bg: string
  link: (locale: Locales) => string
  icon: React.ReactNode
}

const Items: Item[] = [
  {
    key: 'faq',
    bg: 'bg-secondary-300 dark:bg-secondary-700',
    link: () => '/faq',
    icon: <i className='bx bx-help-circle text-4xl text-secondary'></i>,
  },
  {
    key: 'guides',
    bg: 'bg-primary-300 dark:bg-primary-700',
    link: () => '/guides',
    icon: <i className='bx bx-bookmark text-4xl text-primary'></i>,
  },
  {
    key: 'support',
    bg: 'bg-fuchsia-300 dark:bg-fuchsia-700',
    link: (locale) => SiteUrls.support[locale],
    icon: <i className='bx bx-cog text-fuchsia text-4xl'></i>,
  },
]

export default function HomeFindHelpSection() {
  const { t, i18n } = useTranslation('common')
  return (
    <LandingSection>
      <LandingSection.Head title={t('sections.findHelp.title')} subtitle={t('sections.findHelp.subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Items.map((item, idx) => (
          <DefaultCard key={idx} className={`flex flex-col items-center justify-center border-none`}>
            <div
              className={`bg-opacity-10 dark:bg-opacity-10 ${item.bg} flex h-20 w-20 items-center justify-center rounded-md p-2`}
            >
              {item.icon}
            </div>
            <h4 className='mb-2 mt-5 text-lg font-medium'>{t(`sections.findHelp.${item.key}.title`)}</h4>
            <p className='text-center text-slate-500 dark:text-slate-400'>{t(`sections.findHelp.${item.key}.text`)}</p>
            <Link
              href={item.link(i18n.language as Locales)}
              className='mt-2 flex items-center justify-center text-primary-500 dark:text-primary-400'
            >
              {t('sections.findHelp.link')}
              <i className='bx bx-chevron-right text-2xl'></i>
            </Link>
          </DefaultCard>
        ))}
      </div>
    </LandingSection>
  )
}
