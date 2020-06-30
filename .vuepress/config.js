let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Scrypta Wiki'
let description = 'La guida completa all\'ecosistema Scrypta.'

module.exports = {
  title: title,
  description: description,
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/assets/favicon.png" }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: 'https://it.scrypta.wiki/assets/other/scrypta-banner.png' }],
  ],
  themeConfig: {
    logo: '/assets/scrypta.png',
    nav: [
      { text: 'Website', link: 'https://scryptachain.org' },
      { text: 'Github', link: 'https://github.com/scryptachain' },
      { text: 'Discord', link: 'https://discord.io/scrypta' }
    ],
    sidebar: [
      {
        title: 'General Info',
        path: '/general-info/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/general-info/what-is',
          '/general-info/link',
          '/general-info/exchange',
          '/general-info/faq',
          '/general-info/contribute',
        ]
      },
      {
        title: 'White Paper',
        path: '/whitepaper/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/whitepaper/introduction',
          '/whitepaper/the-blockchain-today',
          '/whitepaper/scrypta-blockchain',
          '/whitepaper/scrypta-language',
          '/whitepaper/three-aspects-of-scrypta',
          '/whitepaper/pratical-aspects',
          '/whitepaper/use-cases',
          '/whitepaper/appendix-1',
          '/whitepaper/appendix-2',
          '/whitepaper/appendix-3',
        ]
      },
      {
        title: 'Scrypta Full Node',
        path: '/scrypta-full-node/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/scrypta-full-node/installation',
          '/scrypta-full-node/setup',
          '/scrypta-full-node/data-directory',
          '/scrypta-full-node/command-list',
          '/scrypta-full-node/testnet',
        ]
      },
      {
        title: 'Masternode Setup',
        path: '/masternode-setup/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/masternode-setup/manual-installation',
          '/masternode-setup/hosting-service',
          '/masternode-setup/masternode-faq',
        ]
      },
      {
        title: 'Staking Setup',
        path: '/staking-setup/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/staking-setup/desktop-wallet',
          '/staking-setup/on-cloud',
          '/staking-setup/staking-faq',
        ]
      },
      {
        title: 'dAPPs',
        path: '/dapps/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/dapps/manent-app',
          '/dapps/manent-web',
          '/dapps/extension-browser',
          '/dapps/socialpay',
          '/dapps/electio',
          '/dapps/news',
        ]
      },
      {
        title: 'Planum',
        path: '/planum/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/planum/emission-and-management',
          '/planum/how-it-work',
          '/planum/scrypta-card-wallet',
          '/planum/management-software',
          '/planum/point-of-sale',
        ]
      },
      {
        title: 'Scrypta Core',
        path: '/core/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/core/idanode-management',
          '/core/cache-management',
          '/core/encrypt-decrypt-data',
          '/core/encrypt-decrypt-file',
          '/core/addresses-management',
          '/core/transactions-management',
          '/core/sign-verify-messages',
          '/core/progressive-data-management',
          '/core/p2p-network',
        ]
      },
      {
        title: 'IdANode',
        path: '/idanode/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/idanode/ida-node-installation',
          '/idanode/maintenance',
          '/idanode/block-explorer',
          '/idanode/progressive-data-management',
          '/idanode/ipfs',
          '/idanode/wallet',
          '/idanode/dapps-engine',
          '/idanode/trustlink',
          '/idanode/sidechain',
        ]
      },
      {
        title: 'ScryptaID',
        path: '/id/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/id/general-description',
          '/id/identification',
          '/id/scryptaid-login-module',
          '/id/technical-functioning',
          '/id/scrypta-card-id',
        ]
      },
      {
        title: 'Utilities',
        path: '/utilities/',
        collapsable: true,
        sidebarDepth: 1,
        children: [
          '/utilities/dapp-composer',
          '/utilities/dapp-starter',
          '/utilities/card-generator',
          '/utilities/shamir-backup',
          '/utilities/vanity-address',
          '/utilities/p2p-network',
          '/utilities/versioning',
          '/utilities/bootstrap-generator',
          '/utilities/ipfs',
          '/utilities/faucet',

        ]
      }
    ]
  }
}