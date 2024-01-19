import Footer from '@turistikrota/ui/footer'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { FC } from 'react'
import { getStaticRoute } from '~/static/page'

const MagicFooter: FC = () => {
  const { t, i18n } = useTranslation('general')
  return (
    <Footer>
      <Footer.Copyright>
        <Footer.Copyright.Item>
          © {new Date().getFullYear()} {t('footer.copyright')}
        </Footer.Copyright.Item>
        <Footer.Copyright.Item>
          <Link className='duration-200 hover:brightness-125' href={getStaticRoute(i18n.language).contracts.terms}>
            {t('footer.terms')}
          </Link>
          &bull;
          <Link
            className='duration-200 hover:brightness-125'
            href={getStaticRoute(i18n.language).contracts.privacyNotify}
          >
            {t('footer.privacy-policy')}
          </Link>
          &bull;
          <Link className='duration-200 hover:brightness-125' href={getStaticRoute(i18n.language).contracts.cookies}>
            {t('footer.cookies')}
          </Link>
        </Footer.Copyright.Item>
      </Footer.Copyright>
    </Footer>
  )
}

export default MagicFooter
