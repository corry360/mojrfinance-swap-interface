import { MenuEntry } from '@mozartfinance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mozartfinance.io/',
  },
  {
    label: 'NFTs (coming)',
    icon: 'FarmIcon',
    href: 'https://mozartfinance.io/farms',
  },
   {
    label: t('NFT'),
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
    label: 'Referral (coming)',
    icon: 'FarmIcon',
    href: 'https://mozartfinance.io/farms',
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
      {
        label: 'Blog',
        href: 'https://',
      },
    ],
  },
  {
    label: 'Audit by IB',
    icon: 'TicketIcon',
    href: 'https://github.com',
  },
]

export default config
