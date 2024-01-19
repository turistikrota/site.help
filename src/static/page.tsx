import { SiteUrls } from './site'

export type RouteType = {
  account: {
    details: string
    select: string
  }
  auth: {
    default: string
  }
  aboutUs: string
  contactUs: string
  base: string
  contracts: {
    terms: string
    privacyNotify: string
    privacy: string
    cookies: string
  }
}

export type Locales = 'en' | 'tr'

const Routes: Record<Locales, RouteType> = {
  tr: {
    account: {
      details: `${SiteUrls.account.tr}/menu`,
      select: `${SiteUrls.account.tr}/sec`,
    },
    auth: {
      default: SiteUrls.auth.tr,
    },
    base: SiteUrls.root.tr,
    aboutUs: `${SiteUrls.root.tr}/hakkimizda`,
    contactUs: `${SiteUrls.root.tr}/iletisim`,
    contracts: {
      terms: `${SiteUrls.root.tr}/sozlesmeler/kullanim-kosullari`,
      privacyNotify: `${SiteUrls.root.tr}/sozlesmeler/gizlilik-bildirimi`,
      privacy: `${SiteUrls.root.tr}/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizlilik-politikasi`,
      cookies: `${SiteUrls.root.tr}/sozlesmeler/cerezler`,
    },
  },
  en: {
    account: {
      details: `${SiteUrls.account.en}/menu`,
      select: `${SiteUrls.account.en}/select`,
    },
    auth: {
      default: SiteUrls.auth.en,
    },
    base: SiteUrls.root.en,
    aboutUs: `${SiteUrls.root.en}/about-us`,
    contactUs: `${SiteUrls.root.en}/contact`,
    contracts: {
      terms: `${SiteUrls.root.en}/contracts/terms-of-use`,
      privacyNotify: `${SiteUrls.root.en}/contracts/privacy-notice`,
      privacy: `${SiteUrls.root.en}/contracts/privacy-and-protection-of-personal-data`,
      cookies: `${SiteUrls.root.en}/contracts/cookies`,
    },
  },
}

export const getStaticRoute = (locale: string) => {
  return Routes[locale as Locales]
}

export const mergeUrlWithLocale = (locale: string, url: string) => `/${locale}${url}`
