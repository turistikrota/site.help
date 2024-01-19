import { FC } from 'react'
import { AccountProvider } from '~/hooks/account'
import MagicFooter from '~/partials/footer/MagicFooter'
import OnlyMobileHeader from '~/partials/header/OnlyMobileHeader'
import { LayoutProps } from './layout.types'

const DefaultLayout: FC<React.PropsWithChildren<LayoutProps>> = ({
  children,
  accessTokenIsExists,
  accountCookie,
  fillHeader,
}) => {
  return (
    <AccountProvider accessTokenIsExists={accessTokenIsExists} accountCookie={accountCookie}>
      <OnlyMobileHeader accessTokenIsExists={accessTokenIsExists} fillHeader={fillHeader} />
      <main>{children}</main>
      <MagicFooter />
    </AccountProvider>
  )
}

export default DefaultLayout
