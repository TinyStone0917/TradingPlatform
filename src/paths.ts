export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    swapExchange: '/dashboard/swap-exchange',
    swapRates: '/dashboard/swap-rates',
    localTraders: '/dashboard/local-traders',
    faq: '/dashboard/faq',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
