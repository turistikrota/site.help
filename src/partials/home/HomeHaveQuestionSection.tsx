import Button from '@turistikrota/ui/button'
import LandingSection from '@turistikrota/ui/section/landing'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { getStaticRoute } from '~/static/page'

export default function HomeHaveQuestionSection() {
  const { t, i18n } = useTranslation('common')
  return (
    <LandingSection>
      <LandingSection.Head title={t('sections.haveQuestion.title')} subtitle={t('sections.haveQuestion.subtitle')} />
      <div className='mt-8 flex items-center justify-center'>
        <Link href={getStaticRoute(i18n.language).contactUs}>
          <Button block={false} className='flex min-w-max items-center justify-center gap-2' variant='secondary'>
            <i className='bx bx-message text-lg'></i>
            {t('sections.haveQuestion.button')}
          </Button>
        </Link>
      </div>
    </LandingSection>
  )
}
