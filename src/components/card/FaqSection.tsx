import DefaultCard from '@turistikrota/ui/cards/default'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { EmptyFaqMeta, Faq } from '~/types/faq'
import { getI18nTranslations } from '~/utils/i18n'

type Props = {
  faqs: Faq[]
}

const FaqSection: React.FC<Props> = ({ faqs }) => {
  const { i18n } = useTranslation('common')
  const [active, setActive] = useState<number | null>(0)

  const toggle = (idx: number) => {
    if (active === idx) {
      setActive(null)
    } else {
      setActive(idx)
    }
  }
  return (
    <div data-fc-type='accordion' className='mt-16 flex flex-col gap-y-4 lg:mx-auto lg:w-3/4 2xl:w-2/3'>
      {faqs.map((faq, idx) => (
        <DefaultCard key={idx} className='p-0'>
          <button
            className='open fc-col-open inline-flex w-full items-center justify-between text-left font-semibold transition'
            onClick={() => toggle(idx)}
          >
            {getI18nTranslations(faq.meta, i18n.language, EmptyFaqMeta).title}
            <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
              <i className='bx bx-chevron-down'></i>
            </span>
          </button>
          <div
            className={`w-full overflow-hidden transition-all duration-200 ${
              active === idx ? 'animate-fade-in' : 'hidden animate-fade-out'
            }`}
          >
            <p className='p-4 pt-1 text-gray-500 dark:text-gray-400'>
              {getI18nTranslations(faq.meta, i18n.language, EmptyFaqMeta).description}
            </p>
          </div>
        </DefaultCard>
      ))}
    </div>
  )
}

export default FaqSection
