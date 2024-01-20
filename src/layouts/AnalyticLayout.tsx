import { useTranslation } from 'next-i18next'
import Script from 'next/script'
import { FC, PropsWithChildren } from 'react'

const TurkishAnalytics: FC = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-BHB7K11HSS' strategy='afterInteractive'></Script>
      <Script id='google-tag' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BHB7K11HSS');
      `}
      </Script>
    </>
  )
}

const EnglishAnalytics: FC = () => {
  return (
    <>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-JS351XR926' strategy='afterInteractive'></Script>
      <Script id='google-tag' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JS351XR926');
        `}
      </Script>
    </>
  )
}

const AnalyticLayout: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation()
  return (
    <>
      {children}
      {i18n.language === 'tr' ? <TurkishAnalytics /> : <EnglishAnalytics />}
    </>
  )
}

export default AnalyticLayout
