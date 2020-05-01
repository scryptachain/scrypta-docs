module.exports = {
  themeConfig: {
    logo: '/assets/scrypta.png',
    nav: [
        { text: 'Website', link: 'https://scryptachain.org' },
        { text: 'Github', link: 'https://github.com/scryptachain' },
        { text: 'Discord', link: 'https://discord.io/scrypta' }
    ],
    sidebar: [
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
        title: 'General Info',   
        path: '/general-info/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/general-info/exchange',
          '/general-info/faq',
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
          '/masternode/installazione-manuale',
          '/masternode/servizi-hosting',
          '/masternode/masternode-faq',
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
          '/dapps/planum',
          '/dapps/socialpay',
          '/dapps/electio',
          '/dapps/news', 
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
        title: 'Planum',   
        path: '/planum/',      
        collapsable: true,
        sidebarDepth: 1, 
        children: [
          '/planum/emissione',
          '/planum/transazioni',
          '/planum/software-di-gestione',
          '/planum/point-of-sale',
        ]
      }
    ]
  }
}