/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://web3camp.us',
    generateRobotsTxt: true, // (optional)
    // ...other options
    additionalPaths: async (config) => {
        const result = []

        // just add path here when you have new page
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/multisender' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/chainlist' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/Polkadot-Wallet-Generator' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/ETH-Wallet-Generator' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/oneclick-dapp' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/batch-query' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/nft-checker' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/signator' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/ethers-tool' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/faucet-list' });
        result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: '/LogoCollection' });


        // open list.json in public folder
        // const list = require('./public/json/list.json');
        // list.forEach((item) => {
        //     result.push({ changefreq: 'yearly', priority: 0.7, lastmod: new Date().toISOString(), loc: `${item.href}` });
        // });

        return result
    },
}