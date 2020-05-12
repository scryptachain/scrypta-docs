let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Scrypta Wiki'
let description = 'La guida completa all\'ecosistema Scrypta.'

module.exports = {
  title: title,
  description: description,
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/assets/favicon.png"}],
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
          '/general-info/cosa-è',
          '/general-info/link',
          '/general-info/exchange',
          '/general-info/faq',
        ]
      },
      {
        title: 'White Paper',   
        path: '/whitepaper/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/whitepaper/prefazione',
          '/whitepaper/la-blockchain-oggi',
          '/whitepaper/la-blockchain-di-scrypta',
          '/whitepaper/il-linguaggio-di-scrypta',
          '/whitepaper/le-tre-macroaree-di-scrypta',
          '/whitepaper/aspetto-pratico',
          '/whitepaper/ambiti-applicativi',
          '/whitepaper/appendice-1',
          '/whitepaper/appendice-2',
          '/whitepaper/appendice-3',
        ]
      },
      {
        title: 'Scrypta Full Node',   
        path: '/scrypta-full-node/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/scrypta-full-node/installazione',
          '/scrypta-full-node/data-directory',
          '/scrypta-full-node/comandi',
          '/scrypta-full-node/testnet', 
        ]
      },
      {
        title: 'Masternode Setup',   
        path: '/masternode-setup/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/masternode-setup/installazione-manuale',
          '/masternode-setup/servizi-hosting',
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
          '/planum/come-emettere',
          '/planum/come-funziona',
          '/planum/software-di-gestione',
          '/planum/point-of-sale',
        ]
      },                
      {
        title: 'Scrypta Core',   
        path: '/core/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/core/gestione-idanode',
          '/core/gestione-cache',
          '/core/encrypt-decrypt-data',
          '/core/encrypt-decrypt-file',
          '/core/gestione-indirizzi',
          '/core/gestione-transazioni',
          '/core/firma-verifica-messaggi',
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
          '/idanode/installazione',
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
          '/id/scrypta-identity-framework',
          '/id/scrypta-card-wallet-nfc',
          '/id/scrypta-card-wallet-qr',
        ]
      },
      {
        title: 'Utilities',   
        path: '/utilities/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/utilities/card-generator',
          '/utilities/vanity-address',
          '/utilities/p2p-network',
          '/utilities/bootstrap-generator',
          '/utilities/ipfs',
          '/utilities/faucet',
          '/utilities/dapp-composer',
        ]
      }
    ]
  }
}