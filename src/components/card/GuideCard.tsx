import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FC } from 'react'

type SubItem = {
  title: string
  slug: string
}

type Props = {
  title: string
  subItems: SubItem[]
}

const GuideCard: FC<Props> = ({ title, subItems }) => {
  const { t } = useTranslation('common')
  return (
    <div>
      <h5 className='text-xl font-semibold'>{title}</h5>
      <ul className='mt-4 list-none'>
        {subItems.length === 0 && (
          <li className='mt-2 text-center italic text-slate-500 dark:text-slate-400'>{t('guide.emptyByCategory')}</li>
        )}
        {subItems.map((subItem, idx) => (
          <li key={idx} className='mt-2'>
            <Link
              href={`/${subItem.slug}`}
              className='trnasition-colors flex items-center text-slate-500 duration-200 hover:text-primary-300 dark:text-slate-400 dark:hover:text-primary-400'
            >
              <i className='bx bx-chevron-right text-2xl'></i>
              {subItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuideCard
