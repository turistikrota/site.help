import Button from '@turistikrota/ui/button'
import Input from '@turistikrota/ui/form/input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './home.module.css'

export default function HomeHeadSection() {
  const { t } = useTranslation('common')
  const router = useRouter()
  const initialQuery = router.query.q
  const [query, setQuery] = useState<string>(typeof initialQuery === 'string' ? initialQuery : '')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/${query}`)
  }

  return (
    <section className='h-70vh relative flex flex-col items-center justify-center gap-8 p-4 lg:p-0'>
      <div
        className={`absolute left-0 top-0 h-full w-full bg-cover bg-fixed bg-center bg-no-repeat brightness-30 md:bg-center ${styles.banner}`}
      ></div>
      <div className='z-10 w-full max-w-lg'>
        <h1 className='text-center text-4xl font-semibold text-white'>{t('search.title')}</h1>
        <form onSubmit={onSubmit} className='mt-4 flex w-full gap-2 rounded-md bg-default p-2'>
          <Input
            label={t('search.placeholder')}
            name='search'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button block={false} className='min-w-max' htmlType='submit'>
            {t('search.button')}
          </Button>
        </form>
      </div>
    </section>
  )
}
