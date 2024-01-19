import { Locales } from '@turistikrota/ui/types'

export enum Sites {
  Account = 'account',
  Auth = 'auth',
  Root = 'root',
  Support = 'support',
}

type SiteUrl = {
  [key in Locales]: string
}

export const SiteUrls: Record<Sites, SiteUrl> = {
  [Sites.Account]: {
    tr: process.env.NEXT_PUBLIC_SITE_ACCOUNT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_ACCOUNT_EN_URL!,
  },
  [Sites.Auth]: {
    tr: process.env.NEXT_PUBLIC_SITE_AUTH_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_AUTH_EN_URL!,
  },
  [Sites.Root]: {
    tr: process.env.NEXT_PUBLIC_SITE_ROOT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_ROOT_EN_URL!,
  },
  [Sites.Support]: {
    tr: process.env.NEXT_PUBLIC_SITE_SUPPORT_TR_URL!,
    en: process.env.NEXT_PUBLIC_SITE_SUPPORT_EN_URL!,
  },
}
