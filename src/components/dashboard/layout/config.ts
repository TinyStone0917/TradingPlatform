import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'home', title: 'Home', href: paths.dashboard.overview, icon: 'home' },
  { key: 'swap-exchanges', title: 'Swap Exchanges', href: paths.dashboard.swapExchange, icon: 'transfer' },
  { key: 'swap-rates', title: 'Swap Rates', href: paths.dashboard.swapRates, icon: 'refresh' },
  { key: 'local-traders', title: 'Local Traders', href: paths.dashboard.localTraders, icon: 'routing' },
  { key: 'faq', title: 'FAQ', href: paths.dashboard.faq, icon: 'chat' },
 
] satisfies NavItemConfig[];
