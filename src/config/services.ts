export enum Services {
  Auth = 'auth',
  Account = 'account',
  Help = 'help',
}

export const ApiUrls: Record<Services, string> = {
  [Services.Auth]: process.env.NEXT_PUBLIC_AUTH_API_URL!,
  [Services.Account]: process.env.NEXT_PUBLIC_ACCOUNT_API_URL!,
  [Services.Help]: process.env.NEXT_PUBLIC_HELP_API_URL!,
}

export const apiUrl = (service: Services, path: string) => `${ApiUrls[service]}${path}`
