import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mozartfinance.io/',
  },
   
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pedantic-banach-b6c749.netlify.app/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pedantic-banach-b6c749.netlify.app/pools',
  },
  {
    label: t('NFT (coming)'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    items: [
      {
        label: t('Overview'),
        href: `${nftsBaseUrl}`,
      },
      {
        label: t('Collections'),
        href: `${nftsBaseUrl}/collections`,
      },
      {
        label: t('Activity'),
        href: `${nftsBaseUrl}/activity`,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: 'Docs',
        href: 'https://mozartfi/',
      },
     
    ],
  },
    {
        label: t('IFO (coming)'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: 'https://github.com',
  },
]

export default config
