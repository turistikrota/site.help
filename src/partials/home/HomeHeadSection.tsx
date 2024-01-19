import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { getStaticRoute } from '~/static/page'
import styles from './home.module.css'

type Props = {
  title?: string
  isDetail?: boolean
}

export default function HomeHeadSection({ title, isDetail }: Props) {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const initialQuery = router.query.q
  const [query, setQuery] = useState<string>(typeof initialQuery === 'string' ? initialQuery : '')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`${getStaticRoute(i18n.language).guides}?q=${encodeURIComponent(query)}`)
  }

  return (
    <section
      className={`relative flex flex-col items-center justify-center gap-8 p-4 lg:p-0 ${isDetail ? 'h-40vh' : 'h-70vh'}`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat brightness-30 md:bg-center ${styles.banner}`}
      ></div>
      <div className='z-10 w-full max-w-lg'>
        <h1 className='text-center text-4xl font-semibold text-white'>{title ? title : t('sections.search.title')}</h1>
        {!isDetail && (
          <form onSubmit={onSubmit} className='mt-4 flex w-full gap-2 rounded-md bg-default p-2'>
            <Input
              label={t('sections.search.label')}
              name='search'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button block={false} className='flex items-center justify-center gap-1' htmlType='submit'>
              <i className='bx bx-search text-lg'></i>
              {t('sections.search.button')}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
