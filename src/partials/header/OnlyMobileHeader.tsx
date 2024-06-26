import MobileHeader from '@turistikrota/ui/headers/mobile'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import ModernLogoProvider from '~/components/header/ModernLogo'

type Props = {
  accessTokenIsExists: boolean
  fillHeader?: boolean
}

const AccountHeaderButton = dynamic(() => import('./AccountHeaderButton'), {
  ssr: false,
})

export default function OnlyMobileHeader({ accessTokenIsExists, fillHeader }: Props) {
  const { t, i18n } = useTranslation('common')
  return (
    <>
      <MobileHeader defaultFixed fillSize={fillHeader}>
        <MobileHeader.Left>
          <ModernLogoProvider />
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right>
          <AccountHeaderButton accessTokenIsExists={accessTokenIsExists} />
        </MobileHeader.Right>
      </MobileHeader>
    </>
  )
}
